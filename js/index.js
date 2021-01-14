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
});

var myWave = $('#wave-1').wavify({
    height: 60,
    bones: 5,
    amplitude: 40,
    color: '#30475e',
    speed: .25
});

var myWave2 = $('#wave-2').wavify({
    height: 60,
    bones: 3,
    amplitude: 38,
    color: '#4b6a8a',
    speed: .20
});