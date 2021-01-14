new Vue({
    el: '#app',
    data: {
        arrSections: []
    },
    methods: {
        getArrSections() {
            document.querySelectorAll('.my-section').forEach(elm_section => {
                this.arrSections.push(
                    {
                        str_name: elm_section.getAttribute('data-section-name'),
                        str_href: '#' + elm_section.getAttribute('id')
                    }
                );
            });
        }
    },
    mounted() {
        this.getArrSections();
    }
})