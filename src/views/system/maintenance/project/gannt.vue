<template>
    <figure class="highcharts-figure">
      <div ref="container" class="highcharts-container"></div>
    </figure>
</template>

<script>
import Highcharts from 'highcharts';
import Sankey from 'highcharts/modules/sankey';
import Organization from 'highcharts/modules/organization';
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';

// Initialize Highcharts modules
Sankey(Highcharts);
Organization(Highcharts);
Exporting(Highcharts);
Accessibility(Highcharts);

export default {
  name: 'OrgChart',
  mounted() {
    Highcharts.chart(this.$refs.container, {
      chart: {
        height: 450,
        inverted: true
      },

      title: {
        text: ''
      },

      accessibility: {
        point: {
          descriptionFormatter: function (point) {
            var nodeName = point.toNode.name,
              nodeId = point.toNode.id,
              nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
              parentDesc = point.fromNode.id;
            return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
          }
        }
      },

      series: [{
        type: 'organization',
        name: '',
        keys: ['from', 'to'],
        data: [
          ['Project Director (PD)', 'Project Manager (PM)'],
          ['Project Manager (PM)', 'Assistant Project Manager (APM)'],
          ['Project Manager (PM)', 'Contract Manager (CM)'],
          ['Project Manager (PM)', 'QA/QC Manager'],
          ['Project Manager (PM)', 'Account (AC)'],
          ['Project Manager (PM)', 'Human Resource (HR)'],
          ['Project Manager (PM)', 'Purchasing (Purc)'],
          ['Project Manager (PM)', 'Client'],
          ['Project Manager (PM)', 'Counsultan'],
          ['Project Manager (PM)', 'View'],
          ['Assistant Project Manager (APM)', 'Site'],
          ['Contract Manager (CM)', 'QS'],
          ['QA/QC Manager', 'QA/QC'],
        ],
        levels: [{
          level: 0,
          color: '#f2f3f4', 
          dataLabels: {
            color: '#000000' 
          },
          height: 10
        }, {
          level: 1,
          color: '#f2f3f4', 
          dataLabels: {
            color: '#000000' 
          },
          height: 10
        }, {
          level: 2,
          color: '#f2f3f4',
          dataLabels: {
            color: '#000000' 
          },
          height: 10
        }, {
          level: 4,
          color: '#f2f3f4' ,
          dataLabels: {
            color: '#000000' 
          },
          height: 10
        }],
        nodes: [{
          id: 'Project Director (PD)',
          title: '<span style="line-height: 1.5;">1.Loh Ben Ping</span>',
          color: '#f2f3f4' 
        }, {
          id: 'Contract Manager (CM)',
          title: '<span style="line-height: 1.5;">1.Ng Pooi Hock<br>2.Chin Khoi Hoe</span>',
          color: '#f2f3f4',
        
        },],
        colorByPoint: false,
        color: '#f2f3f4', 
        dataLabels: {
          color: '#000000' 
        },
        borderColor: '#f2f3f4', 
        nodeWidth: 65
      }],
      tooltip: {
        outside: true
      },
      exporting: {
        allowHTML: true,
        sourceWidth: 2000,
        sourceHeight: 450
      }
    });
  },
};

</script>

<style>
.highcharts-figure, .highcharts-data-table table {
  min-width: 360px; 
  max-width: 2000px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #f2f3f4; /* Updated color */
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 600px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555; /* Change if needed */
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
  background: #f2f3f4; /* Updated color */
}
.highcharts-data-table tr:hover {
  background: #f1f7ff; /* Change if needed */
}

.highcharts-container h4 {
  text-transform: none;
  font-size: 14px;
  font-weight: normal;
}
.highcharts-container p {
  font-size: 13px;
  line-height: 16px;
}

@media screen and (max-width: 600px) {
  .highcharts-container h4 {
    font-size: 2.3vw;
    line-height: 3vw;
  }
  .highcharts-container p {
    font-size: 2.3vw;
    line-height: 3vw;
  }
}
</style>
