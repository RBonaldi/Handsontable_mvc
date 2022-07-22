const container = document.querySelector('#example');

var merge = [];

const nomes = ['Carol', 'Welington', 'Rafael', 'Borges', 'Kevin',
    'Josefer', 'Jonathan', 'Vinicius', 'Matheus', 'Romeu', 'Alexandre', 'Jose'];

var listaFuncao = [{ id: 1, name: "CMT" }, { id: 2, name: "COP" }, { id: 3, name: "CMS" }]

var dias = ['', '', '21/07', '22/07', '23/07', '24/07', '25/07', '26/07', '27/07'];

const data = [
    ['Hercilio L (FLN-SBFL)', listaFuncao[0].name],
    ['Hercilio L (FLN-SBFL)', listaFuncao[1].name],
    ['Hercilio L (FLN-SBFL)', listaFuncao[2].name],
    ['Aju/Instrutor NDL-AJU', listaFuncao[0].name],
    ['Aju/Instrutor NDL-AJU', listaFuncao[1].name],
    ['Aju/Instrutor NDL-AJU', listaFuncao[2].name],
    ['PRL-LTZ A', listaFuncao[0].name],
    ['', listaFuncao[1].name],
    ['', listaFuncao[2].name],
    ['PRL-LTZ B', listaFuncao[0].name],
    ['', listaFuncao[1].name],
    ['', listaFuncao[2].name],
    ['PRL-LTZ C', listaFuncao[0].name],
    ['', listaFuncao[1].name],
    ['', listaFuncao[2].name],
    ['PRL-LTZ D', listaFuncao[0].name],
    ['', listaFuncao[1].name],
    ['', listaFuncao[2].name],
    ['PRL-LTZ E', listaFuncao[0].name],
    ['', listaFuncao[1].name],
    ['', listaFuncao[2].name],
    ['PRL-LTZ F', listaFuncao[0].name],
    ['', listaFuncao[1].name],
    ['', listaFuncao[2].name],
    ['PRL-LTZ G', listaFuncao[0].name],
    ['', listaFuncao[1].name],
    ['', listaFuncao[2].name]
];

for (var i = 0; i <= data.length; i++) {
    merge.push({ row: i, col: 0, rowspan: 3, colspan: 1 });
}

CarregarGrid(data);

function CarregarGrid(dadosGrid) {
    const hot = new Handsontable(container, {
        licenseKey: 'non-commercial-and-evaluation',
        language: 'pt-BR',
        data: dadosGrid,
        colHeaders: dias,
        colWidths: 100,
        width: 'auto',
        height: 420,
        fixedRowsTop: 0,
        columns: [
            { type: 'text', readOnly: true },
            { type: 'text', readOnly: true },
            {
                type: 'autocomplete',
                source: nomes
            },
            {
                type: 'autocomplete',
                source: nomes
            },
            {
                type: 'autocomplete',
                source: nomes
            },
            {
                type: 'autocomplete',
                source: nomes
            },
            {
                type: 'autocomplete',
                source: nomes
            },
            {
                type: 'autocomplete',
                source: nomes
            },
            {
                type: 'autocomplete',
                source: nomes
            }
        ],
        cell: [
            {
                row: 1,
                col: 2,
                className: 'custom-cell',
            }
        ],
        mergeCells: merge
    });

    hot.getCellMeta(0, 0).readOnly;
}

function wwwxxx() {
    var diasDois = ['', '', '21/07', '22/07', '23/07', '24/07', '25/07', '26/07', '27/07', 'XYZ'];

    CarregarGrid(diasDois);
}