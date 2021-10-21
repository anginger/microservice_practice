const app = new Vue({
    el: "#app",
    name: "Essential",
    data: () => ({
        articles: [],
        writing: {
            title: null,
            content: null
        },
        response: {
            status: null,
            data: null
        }
    }),
    methods: {
        async downloadArticles() {
            const response = await axios.get('/api/article/list');
            this.articles = response.data.data;
        },
        async sendArticle() {
            if (!(this.writing.title && this.writing.content)) return;
            const form = new URLSearchParams();
            form.set("title", this.writing.title);
            form.set("content", this.writing.content);
            const response = await axios.post('/api/article', form);
            this.response.status = response.status;
            this.response.data = response.data;
            this.downloadArticles();
        }
    },
    created() {
        this.downloadArticles();
    }
})
