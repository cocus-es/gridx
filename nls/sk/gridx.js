define({
//Body
	loadingInfo: "Načítavanie...",
	emptyInfo: "Žiadne položky na zobrazenie",
	loadFailInfo: "Zlyhalo načítavanie údajov!",
	loadMore: "Načítať viac",
	loadMoreLoading: "Načítavanie...",
	loadPrevious: "Načítať predošlé",
	loadPreviousLoading: "Načítavanie...",

//FilterBar
	"clearFilterDialogTitle": "Zrušiť filter",
	"filterDefDialogTitle": "Filter",
	"defaultRuleTitle": "Pravidlo",
	"ruleTitleTemplate": "Pravidlo ${ruleNumber}",
	"noFilterApplied": "Nepoužíva sa žiadny filter.",
	"defineFilter": "Definovať filter",
	"conditionEqual": "rovné",
	"conditionNotEqual": "nerovné",
	"conditionLess": "menšie ako",
	"conditionLessEqual": "menšie ako alebo rovné",
	"conditionGreater": "väčšie ako",
	"conditionGreaterEqual": "väčšie ako alebo rovné",
	"conditionContain": "obsahuje",
	"conditionIs": "je",
	"conditionStartWith": "začína s",
	"conditionEndWith": "končí s",
	"conditionNotContain": "neobsahuje",
	"conditionIsNot": "nie je",
	"conditionNotStartWith": "nezačína s",
	"conditionNotEndWith": "nekončí s",
	"conditionBefore": "pred",
	"conditionAfter": "za",
	"conditionRange": "rozsah",
	"conditionIsEmpty": "je prázdne",
	"all": "všetko",
	"any": "žiadne",
	"relationAll": "všetky pravidlá",
	"waiRelAll": "Vyhovovať všetkým týmto pravidlám:",
	"relationAny": "ľubovoľné pravidlá",
	"waiRelAny": "Vyhovovať ľubovoľným z týchto pravidiel:",
	"relationMsgFront": "Vyhovieť",
	"relationMsgTail": "",
	"and": "a",
	"or": "alebo",
	"addRuleButton": "Pridať pravidlo",
	"waiAddRuleButton": "Pridať nové pravidlo",
	"removeRuleButton": "Odstrániť pravidlo",
	"waiRemoveRuleButtonTemplate": "Odstrániť pravidlo ${0}",
	"addRuleButton": "Pridať filtrovacie pravidlo",
	"cancelButton": "Zrušiť",
	"waiCancelButton": "Zrušiť toto dialógové okno",
	"clearButton": "Zrušiť",
	"waiClearButton": "Zrušiť filter",
	"filterButton": "Filter",
	"waiFilterButton": "Odoslať filter",
	"columnSelectLabel": "Stĺpec",
	"waiColumnSelectTemplate": "Stĺpec pre pravidlo ${0}",
	"conditionSelectLabel": "Podmienka",
	"waiConditionSelectTemplate": "Podmienka pre pravidlo ${0}",
	"valueBoxLabel": "Hodnota",
	"waiValueBoxTemplate": "Zadajte hodnotu na filtrovanie pre pravidlo ${0}",
	"rangeTo": "do",
	"rangeTemplate": "od ${0} do ${1}",
	"statusTipHeaderColumn": "Stĺpec",
	"statusTipHeaderCondition": "Pravidlá",
	"statusTipTitle": "Lišta filtra",
	"statusTipMsg": "Kliknite na lištu filtra, ak chcete filtrovať podľa hodnôt v ${0}.",
	"anycolumn": "ľubovoľný stĺpec",
	"statusTipTitleNoFilter": "Lišta filtra",
	"statusTipTitleHasFilter": "Filter",
	"statusTipRelPre": "Vyhovieť",
	"statusTipRelPost": "pravidlá.",
	"statusTipHeaderAll": "Vyhovieť všetkým pravidlám.",
	"statusTipHeaderAny": "Vyhovieť ľubovoľným pravidlám.",
	"defaultItemsName": "položky",
	"filterBarMsgHasFilterTemplate": "Zobrazuje sa ${0} z ${1} ${2}.",
	"filterBarMsgNoFilterTemplate": "Nepoužíva sa žiadny filter",
	"filterBarDefButton": "Definovať filter",
	"waiFilterBarDefButton": "Filtrovať tabuľku",
	"a11yFilterBarDefButton": "Filtrovať...",
	"filterBarClearButton": "Zrušiť filter",
	"waiFilterBarClearButton": "Zrušiť filter",
	"closeFilterBarBtn": "Zatvoriť lištu filtra",
	"clearFilterMsg": "Toto odstráni filter a zobrazí všetky dostupné záznamy",
	"anyColumnOption": "Ľubovoľný stĺpec",
	"trueLabel": "Pravda",
	"falseLabel": "Nepravda",
	"radioTrueLabel": "Hodnota pravda",
	"radioFalseLabel": "Hodnota nepravda",
	"beginTimeRangeLabel": "Začiatočná hodnota rozsahu časov",
	"endTimeRangeLabel": "Koncová hodnota rozsahu časov",
	"beginDateRangeLabel": "Začiatočná hodnota rozsahu dátumov",
	"endDateRangeLabel": "Koncová hodnota rozsahu dátumov",
	"startsWithExpr": "${0}*",

//NestedSort
	singleSort: "Jednoduché triedenie",
	nestedSort: "Vnorené triedenie",
	ascending: "Kliknutím aktivujete vzostupné zoradenie",
	descending: "Kliknutím aktivujete zostupné zoradenie",
	sortingState: "${0} - ${1}",
	unsorted: "Netriediť tento stĺpec",
	waiSingleSortLabel: "${0} - je zoradené podľa ${1}. Vyberte zoradenie podľa ${2}",
	waiNestedSortLabel:"${0} - je vnorené podľa ${1}. Vyberte vnorené zoradenie podľa ${2}",

//PaginationBar
	pagerWai: 'Stránky',
	pageIndex: '${0}',
	pageIndexTitle: 'Strana ${0}',
	firstPageTitle: 'Prvá strana',
	prevPageTitle: 'Predošlá strana',
	nextPageTitle: 'Ďalšia strana',
	lastPageTitle: 'Posledná strana',
	pageSize: '${0}',
	pageSizeTitle: '${0} položiek na strane',
	pageSizeAll: 'Všetky',
	pageSizeAllTitle: 'Všetky položky',
	description: '${0} - ${1} z ${2} položiek.',
	descriptionEmpty: 'Mriežka je prázdna.',
	// OneUI blueprint
	summary: 'Celkovo: ${0}',
	summaryWithSelection: 'Celkovo: ${0}, vybratých: ${1}',
	gotoBtnTitle: 'Prejsť na špecifickú stranu',
	gotoDialogTitle: 'Prejsť na stranu',
	gotoDialogMainMsg: 'Zadajte číslo strany:',
	gotoDialogPageCount: '(${0} strán)',
	gotoDialogOKBtn: 'Prejsť',
	gotoDialogCancelBtn: 'Zrušiť',
	// for drop down pagination bar
	pageLabel: 'Strana',
	pageSizeLabel: 'Riadky',

//QuickFilter
	filterLabel: 'Filter',
	clearButtonTitle: 'Zrušiť filter',
	buildFilterMenuLabel: 'Vytvoriť filter&hellip;',
	apply: 'Použiť filter',

//Sort
	helpMsg: '${0} - kliknutie = zoradiť, Ctrl + kliknutie = pridať do zoradenia',
	singleHelpMsg: '${0} - Kliknutím zoraďte',
	priorityOrder: 'priorita zoradenia ${0}',

//SummaryBar
	summary: 'Celkovo: ${0}',
	summarySelected: 'Vybratých: ${0}',
	summaryRange: 'Range: ${0}-${1}',	//need translation

//Other
	indirectSelectAll: "Press SPACE to select all.",	//need translation
	indirectDeselectAll: "Press SPACE to deselect all.",	//need translation
	treeExpanded: "Control + left arrow key to collapse this row.",	//need translation
	treeCollapsed: "Control + right arrow key to expand this row."	//need translation
});
