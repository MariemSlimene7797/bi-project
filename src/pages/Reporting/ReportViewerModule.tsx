import React from 'react';
//Report designer source
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css';
//Data-Visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';
//Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min';
declare let BoldReportViewerComponent: any;

const viewerStyle = {
  height: '700px',
  width: '100%'
};
const ReportViewerModule: React.FC = () => {
  const reportServiceUrl = 'http://localhost:7215/api/ReportViewer';
  // https://help.boldreports.com/report-viewer-sdk/faq/difference-between-report-service-url-and-report-server-url/
  // https://help.boldreports.com/report-viewer-sdk/javascript-reporting/report-viewer/report-service/create-aspnet-core-web-api-service/
  const reportServerUrl = 'http://desktop-3d2n79g:80/ReportServer2022'; //ok
  const reportPath = '/test';
  return (
    <BoldReportViewerComponent
      style={viewerStyle}
      id="reportviewer-container"
      reportServiceUrl={reportServiceUrl}
      reportPath={reportPath}
      //http://desktop-3d2n79g/Reports2022/report/test
      reportServerUrl={reportServerUrl}
    ></BoldReportViewerComponent>
  );
};

export default ReportViewerModule;
