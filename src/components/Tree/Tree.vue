<template>
    <div class="tree">
      <ul>
        <li v-for="(node, index) in nodes" :key="index">
          <div :class="['flex items-center space-x-2', node.isOpen ? 'text-blue-600' : '']">
            <!-- Arrow icon -->
            <button @click="toggle(node)" class="text-sm cursor-pointer">
              <Fa6SolidChevronDown v-if="!node.isOpen" class="text-gray-900" />
              <Fa6SolidChevronUp v-if="node.isOpen" class="text-blue-600" />
            </button>
  
            <!-- Checkbox -->
            <input
              type="checkbox"
              :ref="`checkbox-${index}`"
              :indeterminate="node.isIndeterminate"
              v-model="node.isChecked"
              @change="onCheckboxChange(node)"
              :class="['text-blue-600 mt-0.5 rounded border-gray-200 shrink-0 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed form-checkbox']"
            />
            
            <!-- Node label -->
            <span :class="node.isOpen ? 'text-blue-600' : ''">{{ node.label }}</span>
          </div>
          
          <!-- Render child nodes if expanded -->
          <Tree v-if="node.children && node.isOpen" :nodes="node.children" />
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, watch } from 'vue';
  
  const props = defineProps({
    nodes: {
      type: Array,
      required: true
    }
  });
  
  // Function to toggle the node open/close state
  const toggle = (node) => {
    node.isOpen = !node.isOpen;
  };
  
  // Function to handle checkbox change
  const onCheckboxChange = (node) => {
    // If this is a parent node, update all child nodes
    if (node.children) {
      node.children.forEach(child => {
        child.isChecked = node.isChecked; // Set children to parent's checkbox state
        child.isIndeterminate = false; // Reset child node's indeterminate state
      });
    }
  
    // Update the parent checkbox state based on the children checkboxes
    updateParentCheckboxState(node);
  };
  
  // Update parent checkbox state based on child checkboxes
  const updateParentCheckboxState = (node) => {
    if (!node.parent) return;
  
    const allChecked = node.parent.children.every(child => child.isChecked);
    const someChecked = node.parent.children.some(child => child.isChecked);
    const allUnchecked = node.parent.children.every(child => !child.isChecked);
  
    // Update the parent checkbox's checked and indeterminate state
    node.parent.isChecked = allChecked;
    node.parent.isIndeterminate = !allChecked && someChecked;
  
    // Manually set the parent checkbox to Indeterminate state if necessary
    const parentCheckbox = node.parent.$refs[`checkbox-${node.parentIndex}`];
    if (parentCheckbox) {
      parentCheckbox.indeterminate = node.parent.isIndeterminate;
    }
  };
  
  // Watch for changes in nodes to update parent checkbox state
  watch(() => props.nodes, (newNodes) => {
    newNodes.forEach(updateParentCheckboxState);
  }, { deep: true });
  </script>
  
  <style scoped>
  .tree {
    padding-left: 20px;
  }
  
  .node {
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .node:hover {
    background-color: #f0f0f0;
  }
  </style>
  