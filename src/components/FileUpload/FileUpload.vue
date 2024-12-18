<template>
    <div class="file-upload-component">
      <!-- 隱藏的檔案輸入 -->
      <input
        type="file"
        ref="fileInput"
        class="hidden"
        @change="handleFileChange"
        :multiple="allowMultiple"
      />
  
      <!-- 上傳按鈕 -->
      <button
        type="button"
        class="flex overflow-hidden relative w-full text-sm rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:outline-none focus:z-10 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:border-neutral-600"
        @click="triggerFileInput"
      >
        <span class="px-4 py-3 h-full bg-gray-100 text-nowrap dark:bg-neutral-800">
          Browse Files
        </span>
        <span class="flex overflow-hidden px-4 py-3 h-full group grow">
          <span
            v-if="!selectedFileName"
            class="text-gray-400"
          >
            Choose files to upload
          </span>
          <span v-else>
            {{ selectedFileName }}
          </span>
        </span>
      </button>
  
      <!-- 提示文字 -->
      <p v-if="showHint && !selectedFileName" class="mt-2 text-sm text-gray-400">
        Please choose a file to upload. Maximum size: 5MB.
      </p>
      <p v-if="showHint && selectedFileName" class="mt-2 text-sm text-green-500">
        File ready to upload: {{ selectedFileName }}.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "FileUpload",
    props: {
      allowMultiple: {
        type: Boolean,
        default: false, // 控制是否允許多檔案上傳
      },
      showHint: {
        type: Boolean,
        default: false, // 控制是否顯示提示文字
      },
    },
    data() {
      return {
        selectedFileName: null, // 儲存選擇的檔案名稱
      };
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click(); // 模擬點擊隱藏的檔案輸入框
      },
      handleFileChange(event) {
        const files = event.target.files;
        if (files.length > 0) {
          this.selectedFileName = this.allowMultiple
            ? Array.from(files).map((file) => file.name).join(", ")
            : files[0].name;
        } else {
          this.selectedFileName = null;
        }
      },
    },
  };
  </script>
  