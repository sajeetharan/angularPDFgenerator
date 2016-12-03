  var app = angular.module('pdfDemo', []);
  var controller = app.controller('pdfCtrl', pdfController);

  function pdfController($scope) {
    // prepare the document definition using declarative approach
    var docDefinition = {
      content: [
        {
          text: 'Criketers and scores'
        },
        {
          style: 'demoTable',
          table: {
            widths: ['*', '*', '*'],
            body: [
              [{text: 'Name', style: 'header'}, {text: 'Matches', style: 'header'},
                {text: 'Score', style: 'header'}
              ],
              ['Sachin', '344', '52'],
              ['Sanga', '320', '89'],
              ['Ponting', '300', '68'] 
            ]
          }
        }
      ],
      styles: {
        header: {
          bold: true,
          color: '#000',
          fontSize: 11
        },
        demoTable: {
          color: '#666',
          fontSize: 10
        }
      }
    };

    $scope.openPdf = function() {
      pdfMake.createPdf(docDefinition).open();
    };

    $scope.downloadPdf = function() {
      pdfMake.createPdf(docDefinition).download();
    };
  }
