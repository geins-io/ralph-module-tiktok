<template>
    <div v-if="videoToRender" v-html="videoToRender.html"></div>
</template>
<script>
/* 
  TikTok Single embed video
*/

export default {
    name: 'GeinsTikTokSingleVideo',
    mixins: [],
    props: {
        creator: {
            type: String,
            required: true
        },
        videoId: {
            type: String,
            required: true
        }
    },
    data: () => ({
        videoToRender: null
    }),
    computed: {},
    watch: {
        videoToRender (){
            const script = document.createElement('script');
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            document.head.appendChild(script);
        }
    },
    mounted() {
        this.fetchVideo()
    },
    methods: {
        async fetchVideo() {
        const res = await fetch(`https://www.tiktok.com/oembed?url=https://www.tiktok.com/@${this.creator}/video/${this.videoId}`)
        const data = await res.json()
        this.videoToRender = data
    }
    }
};
</script>
  