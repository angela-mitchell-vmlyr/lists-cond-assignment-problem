const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            userInput: '',
            showList: true,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.userInput);
        },
        toggleList() {
            if (this.tasks.length > 0) {
                this.showList = !this.showList;
            }
        },
    }
});

app.mount('#assignment');