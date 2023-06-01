<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default {
    name: 'Chart',
    components: { Line },
    props: {
        points: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: "",
        },
        color: {
            type: String,
            default: "#000000"
        },
    },
    data() {
        return {
            chartData: {
                datasets: [],
                labels: [],

            },
            chartOptions: {
                responsive: true,
                elements: {
                    lines: {
                        borderWidth: "3",
                        
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }

                },
                plugins: {
                    title: {
                        display: true,
                        text: this.title,
                    },
                    legend: {
                        display: false
                    }
                },
            }
        }
    },
    watch: {
        points(val) {
            this.chartData = {
                datasets: [{
                    data: val,
                    borderColor: this.color
                }],
                labels: [...Array(val.length).keys()]
            };
        },
    },
    beforeMount() {
        this.chartData.datasets = [{ ...this.points }];
    }
}
</script>
  