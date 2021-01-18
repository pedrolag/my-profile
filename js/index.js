new Vue({
    el: '#app',
    data: {
        arrSections: []
    },
    methods: {
        getArrSections() {
            document.querySelectorAll('[data-section-name]').forEach(elm_section => {
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
    height: 80,
    bones: 8,
    amplitude: 10,
    color: '#30475e',
    speed: .2
});

var myWave2 = $('#wave-2').wavify({
    height: 90,
    bones: 6,
    amplitude: 10,
    color: '#4b6a8a',
    speed: .15
});