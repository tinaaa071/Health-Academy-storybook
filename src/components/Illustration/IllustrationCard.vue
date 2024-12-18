<template>
    <div class="flex relative flex-col items-center p-4 gap-2 bg-gray-50 rounded-lg border transition-transform duration-300 transform hover:scale-[1.02]">
      <!-- Color Block -->
      <div 
        class="flex items-center mb-2 w-full"
      >
        <img 
        :src="imgSrc" 
        class="object-contain w-full"
        :class="[aspectClass]"
        >
      </div>
    
      <!-- Title -->
      <p class="text-sm">{{ imgTitle }}</p>
      
      <!-- Download Img -->
      <div class="flex justify-center items-center space-x-2 w-full">
        <button
          class="relative text-gray-500 whitespace-nowrap hover:text-gray-800"
          @click="downloadImage"
          title="Download image"
        >
          <!-- Download Icon -->
          <div class="flex gap-2 items-center px-3 py-2 w-full text-xs bg-gray-200 rounded-md transition-colors duration-300 text-gray-500/90 hover:bg-gray-300">
            Download
            <Fa6SolidFileArrowDown class="text-xs" />
          </div>
        </button>
      </div>
    
    </div>
  </template>
  
  <script setup>
  
  // Define props for dynamic data
  const props = defineProps({
    imgSrc: {
      type: String,
      required: true
    },
    aspectClass: {
      type: [String, Array],
      default: 'aspect-[16/9]',
    },
    imgTitle: {
      type: String,
      required: true
    }
  });
  
  // Method to download the image using fetch
  async function downloadImage() {
    try {
      // Fetch the image as a blob
      const response = await fetch(props.imgSrc);
      const blob = await response.blob();
      
      // Create an object URL from the blob
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
  
      // Set the download attribute and the blob URL
      link.href = url;
      link.download = props.imgTitle || 'download'; // Use imgTitle as the filename, fallback to 'download'
      link.style.display = 'none'; // Hide the link element
      document.body.appendChild(link); // Append the link to the DOM
      link.click(); // Simulate a click to trigger the download
      document.body.removeChild(link); // Remove the link element after the download is triggered
      URL.revokeObjectURL(url); // Revoke the object URL to release memory
    } catch (error) {
      console.error("Download failed", error);
    }
  }
  </script>
  