<template>
  <div class="p-8 space-y-10">
    <!-- Colors Section -->
    <section>
      <h2 class="text-h2 font-bold">Colors</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(value, name) in colors.primary"
          :key="name"
          class="space-y-2"
        >
          <div :class="`bg-primary-${name} h-12 w-full rounded`"></div>
          <p class="text-sm font-medium text-gray-800">Primary {{ name }}</p>
        </div>
        <div
          v-for="(value, name) in colors.accent"
          :key="name"
          class="space-y-2"
        >
          <div
            :class="`bg-${
              name === 'hover' ? 'accent-hover' : `accent-${name}`
            } h-12 w-full rounded`"
          ></div>
          <p class="text-sm font-medium text-gray-800">Accent {{ name }}</p>
        </div>
        <div
          v-for="(value, name) in colors.semantic"
          :key="name"
          class="space-y-2"
        >
          <div :class="`bg-semantic-${name} h-12 w-full rounded`"></div>
          <p class="text-sm font-medium text-gray-800">Semantic {{ name }}</p>
        </div>
      </div>
    </section>

    <!-- Typography Section -->
    <section>
      <h2 class="text-h2 font-bold">Typography</h2>
      <div class="space-y-6">
        <!-- Headings -->
        <div>
          <h3 class="text-h3 font-bold">Headings</h3>
          <div class="space-y-4">
            <p class="text-heading font-bold">Heading (64px)</p>
            <p class="text-h1 font-bold">H1 (48px)</p>
            <p class="text-h2 font-bold">H2 (32px)</p>
            <p class="text-h3 font-bold">H3 (24px)</p>
          </div>
        </div>

        <!-- Subtitle / Body Fonts -->
        <div>
          <h3 class="text-h3 font-bold">Subtitle / Body Fonts</h3>
          <div class="space-y-4">
            <p class="text-subtitle font-medium">Subtitle (16px, Medium)</p>
            <p class="text-body-lg font-medium">Body Large (14px, Medium)</p>
            <p class="text-body-md font-regular">Body Medium (16px, Regular)</p>
            <p class="text-body-md font-bold">Body Medium (16px, Bold)</p>
            <p class="text-body-sm font-medium">Body Small (14px, Medium)</p>
            <p class="text-extra-sm font-regular">
              Extra Small (12px, Regular)
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Font Family -->
    <section>
      <h2 class="text-h2 font-bold">Font Family</h2>
      <p class="font-sans text-body-md">
        This is the default font family (Outfit).
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        primary: {
          50: "#f69b99",
          100: "#f48784",
          200: "#f27370",
          300: "#f05f5b",
          400: "#ee4b47",
          500: "#ED3833",
          600: "#d5322d",
          700: "#bd2c28",
          800: "#a52723",
          900: "#8d211e",
        },
        accent: {
          hover: "#F37A76",
          pressed: "#1A1A1A",
          focused: "#ED3833",
        },
        semantic: {
          info: "#BED62F",
          success: "#BED62F",
          warning: "#28ABE1",
          error: "#ED2227",
        },
      },
    };
  },
};
</script>

<style scoped>
.bg-primary-50 {
  background-color: #f69b99;
}
.bg-primary-100 {
  background-color: #f48784;
}
.bg-primary-200 {
  background-color: #f27370;
}
.bg-primary-300 {
  background-color: #f05f5b;
}
.bg-primary-400 {
  background-color: #ee4b47;
}
.bg-primary-500 {
  background-color: #ed3833;
}
.bg-primary-600 {
  background-color: #d5322d;
}
.bg-primary-700 {
  background-color: #bd2c28;
}
.bg-primary-800 {
  background-color: #a52723;
}
.bg-primary-900 {
  background-color: #8d211e;
}
.bg-accent-hover {
  background-color: #f37a76;
}
.bg-accent-pressed {
  background-color: #1a1a1a;
}
.bg-accent-focused {
  background-color: #ed3833;
}
.bg-semantic-info {
  background-color: #bed62f;
}
.bg-semantic-success {
  background-color: #bed62f;
}
.bg-semantic-warning {
  background-color: #28abe1;
}
.bg-semantic-error {
  background-color: #ed2227;
}
</style>
