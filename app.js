const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            userInput: '',
            showList: true,
        }
    },
    computed: {
        buttonCaption() {
            // Best practice: move complex logic out of HTML code into JavaScript code
            // This is a scenario where using a computed property makes a lot of sense
            return this.showList ? 'Hide List' : 'Show List';
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