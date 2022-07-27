const { createApp } = Vue;

const vueApp = createApp({
  data() {
    return {
      newTask: '',
      showList: true,
      tasks: [],
    };
  },
  computed: {
    buttonText() {
      if (this.showList) {
        return 'Hide';
      }

      return 'Show';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

vueApp.mount('#assignment');
