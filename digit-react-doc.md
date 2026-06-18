# DIGIT UI React Components Documentation

Welcome to the comprehensive API documentation for `@egovernments/digit-ui-components`. This package contains premium UI components built for digital public goods (DPGs) following **Atomic Design Principles**.

This document details every component, their purpose, properties (props), default values, type constraints, and usage examples.

## Table of Contents

### 1. [Atoms](#1-atoms-atomic-components)
  - [Accordion](#accordion)
  - [AccordionList](#accordionlist)
  - [ActionLinks](#actionlinks)
  - [AlertCard](#alertcard)
  - [Amount](#amount)
  - [Animation](#animation)
  - [AppContainer](#appcontainer)
  - [AppHelpDrawer](#apphelpdrawer)
  - [BackLink](#backlink)
  - [Banner](#banner)
  - [BodyContainer](#bodycontainer)
  - [BreadCrumb](#breadcrumb)
  - [BreakLine](#breakline)
  - [Button](#button)
  - [ButtonGroup](#buttongroup)
  - [ButtonSelector](#buttonselector)
  - [Card](#card)
  - [CardBasedOptions](#cardbasedoptions)
  - [CardCaption](#cardcaption)
  - [CardHeader](#cardheader)
  - [CardLabel](#cardlabel)
  - [CardLabelError](#cardlabelerror)
  - [CardText](#cardtext)
  - [CheckBox](#checkbox)
  - [Chip](#chip)
  - [CitizenHomeCard](#citizenhomecard)
  - [CitizenInfoLabel](#citizeninfolabel)
  - [CollapseAndExpandGroups](#collapseandexpandgroups)
  - [ConnectingCheckPoints](#connectingcheckpoints)
  - [CustomSVG](#customsvg)
  - [DatePicker](#datepicker)
  - [DisplayPhotos](#displayphotos)
  - [Divider](#divider)
  - [Dropdown](#dropdown)
  - [ErrorMessage](#errormessage)
  - [FileUpload](#fileupload)
  - [Footer](#footer)
  - [Hamburger](#hamburger)
  - [HamburgerButton](#hamburgerbutton)
  - [Header](#header)
  - [HeaderBar](#headerbar)
  - [HeaderComponent](#headercomponent)
  - [HelpInfoCard](#helpinfocard)
  - [HomeFooter](#homefooter)
  - [HorizontalNav](#horizontalnav)
  - [InboxSearchLinks](#inboxsearchlinks)
  - [InfoButton](#infobutton)
  - [InputTextAmount](#inputtextamount)
  - [KeyNote](#keynote)
  - [LabelFieldPair](#labelfieldpair)
  - [LinkLabel](#linklabel)
  - [Loader](#loader)
  - [Menu](#menu)
  - [MobileNumber](#mobilenumber)
  - [MultiSelectDropdown](#multiselectdropdown)
  - [NestedTable](#nestedtable)
  - [NoResultsFound](#noresultsfound)
  - [OTPInput](#otpinput)
  - [Panels](#panels)
  - [Paragraph](#paragraph)
  - [PlusMinusInput](#plusminusinput)
  - [PopUp](#popup)
  - [PrivateRoute](#privateroute)
  - [RadioButtons](#radiobuttons)
  - [Rating](#rating)
  - [RoundedLabel](#roundedlabel)
  - [SearchComponent](#searchcomponent)
  - [SelectionTag](#selectiontag)
  - [SideNav](#sidenav)
  - [SidePanel](#sidepanel)
  - [Stepper](#stepper)
  - [StringManipulator](#stringmanipulator)
  - [SubmitBar](#submitbar)
  - [SummaryCardFieldPair](#summarycardfieldpair)
  - [SVG](#svg)
  - [Switch](#switch)
  - [Tab](#tab)
  - [TableBody](#tablebody)
  - [TableCell](#tablecell)
  - [TableFooter](#tablefooter)
  - [TableHeader](#tableheader)
  - [TableMain](#tablemain)
  - [TableRow](#tablerow)
  - [Tag](#tag)
  - [Telephone](#telephone)
  - [TextArea](#textarea)
  - [TextBlock](#textblock)
  - [TextInput](#textinput)
  - [Timeline](#timeline)
  - [Toast](#toast)
  - [Toggle](#toggle)
  - [ToggleSwitch](#toggleswitch)
  - [TreeSelect](#treeselect)
  - [UploadFile](#uploadfile)
  - [UploadImage](#uploadimage)
  - [UploadWidget](#uploadwidget)
  - [WhatsNewCard](#whatsnewcard)
### 2. [Molecules](#2-molecules-molecular-components)
  - [ApiDropdown](#apidropdown)
  - [BottomSheet](#bottomsheet)
  - [CustomDropdown](#customdropdown)
  - [DetailsCard](#detailscard)
  - [FilterCard](#filtercard)
  - [FormCard](#formcard)
  - [FormStep](#formstep)
  - [InputCard](#inputcard)
  - [LandingPageCard](#landingpagecard)
  - [LandingPageWrapper](#landingpagewrapper)
  - [LocationDropdownWrapper](#locationdropdownwrapper)
  - [MenuCard](#menucard)
  - [MenuCardWrapper](#menucardwrapper)
  - [MetricCard](#metriccard)
  - [MultiUploadWrapper](#multiuploadwrapper)
  - [PanelCard](#panelcard)
  - [ResultsDataTable](#resultsdatatable)
  - [SearchAction](#searchaction)
  - [SearchForm](#searchform)
  - [SearchOnRadioButtons](#searchonradiobuttons)
  - [SortAction](#sortaction)
  - [SummaryCard](#summarycard)
  - [TableMolecule](#tablemolecule)
  - [TextInputCard](#textinputcard)
  - [TimelineMolecule](#timelinemolecule)
  - [TooltipWrapper](#tooltipwrapper)
### 3. [HOCs (Higher-Order Components)](#3-hocs-higher-order-components)
  - [AppLocalisationWrapper](#applocalisationwrapper)
  - [BoundaryFilter](#boundaryfilter)
  - [ButtonIdentificationProvider](#buttonidentificationprovider)
  - [FieldComposer](#fieldcomposer)
  - [FieldController](#fieldcontroller)
  - [Fields](#fields)
  - [FieldV1](#fieldv1)
  - [FormComposerCitizen](#formcomposercitizen)
  - [FormComposerStudio](#formcomposerstudio)
  - [FormComposerV2](#formcomposerv2)
  - [InboxSearchComposer](#inboxsearchcomposer)
  - [Modal](#modal)
  - [ResultsDataTableWrapper](#resultsdatatablewrapper)
  - [ResultsTable](#resultstable)
  - [SectionIdentificationProvider](#sectionidentificationprovider)
  - [Tooltip](#tooltip)
  - [UploadFileComposer](#uploadfilecomposer)

---

## 1. Atoms (Atomic Components)
Atomic components are the basic building blocks of our UI library that cannot be broken down further (e.g., buttons, inputs, chips).

### Accordion

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Accordion.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Accordion.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **title** | `string` | ✅ Yes | `"Section Header"` | - |
| **children** | `any` | No | ``Dummy text refers to the bits of content that are used to fill a website. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.` | - |
| **customClassName** | `string` | No | `""` | - |
| **customStyles** | `object` | No | `{}` | - |
| **hideBorderRadius** | `bool` | No | `false` | - |
| **hideCardBg** | `bool` | No | `false` | - |
| **hideCardBorder** | `bool` | No | `false` | - |
| **hideDivider** | `bool` | No | `false` | - |
| **icon** | `string` | No | `null` | - |
| **iconFill** | `string` | No | - | - |
| **iconHeight** | `string` | No | - | - |
| **iconWidth** | `string` | No | - | - |
| **isChild** | `any` | No | - | - |
| **isClosed** | `bool` | No | `false` | - |
| **isOpenInitially** | `bool` | No | `false` | - |
| **number** | `node` | No | `null` | - |
| **onToggle** | `func` | No | - | - |

**Usage Example:**
```jsx
import { Accordion } from "@egovernments/digit-ui-components";

<Accordion
  title="Section Header"
  isOpenInitially=false
/>
```

---

### AccordionList

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Accordion.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Accordion.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | ✅ Yes | ``Dummy text refers to the bits of content that are used to fill a website. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.` | - |
| **addDivider** | `bool` | No | `false` | - |
| **allowMultipleOpen** | `bool` | No | `true` | - |
| **className** | `any` | No | - | - |
| **customClassName** | `string` | No | `""` | - |
| **customStyles** | `object` | No | `{}` | - |
| **styles** | `any` | No | - | - |

**Usage Example:**
```jsx
import { AccordionList } from "@egovernments/digit-ui-components";

<AccordionList
  children=`Dummy text refers to the bits of content that are used to fill a website. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.
>
  {/* Children elements go here */}
</AccordionList>
```

---

### ActionLinks

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/ActionLinks.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/ActionLinks.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | Click Event handler when icon is clicked |
| **className** | `string` | No | - | custom class of the svg icon |
| **style** | `object` | No | - | custom style of the svg icon |

**Usage Example:**
```jsx
import { ActionLinks } from "@egovernments/digit-ui-components";

<ActionLinks
  className="className"
  style={{}}
  children=""
>
  {/* Children elements go here */}
</ActionLinks>
```

---

### AlertCard

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/AlertCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/AlertCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **label** | `string` | ✅ Yes | `""` | - |
| **additionalElements** | `arrayOf(node)` | No | `[]` | - |
| **className** | `any` | No | - | - |
| **headerClassName** | `any` | No | - | - |
| **headerWrapperClassName** | `any` | No | - | - |
| **inline** | `bool` | No | `false` | - |
| **style** | `object` | No | `{}` | - |
| **text** | `string` | No | `""` | - |
| **textStyle** | `object` | No | `{}` | - |
| **variant** | `string` | No | `"success"` | - |
| **varinat** | `any` | No | `""` | - |

**Usage Example:**
```jsx
import { AlertCard } from "@egovernments/digit-ui-components";

<AlertCard
  label="AlertCard"
  variant="success"
/>
```

---

### Amount

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Amount.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Amount.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | - | - |
| **roundOff** | `bool` | No | `true` | - |
| **style** | `object` | No | - | - |
| **t** | `any` | No | - | - |
| **value** | `number` | No | - | - |

**Usage Example:**
```jsx
import { Amount } from "@egovernments/digit-ui-components";

<Amount
  value={0}
/>
```

---

### Animation

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Animation.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Animation.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { Animation } from "@egovernments/digit-ui-components";

<Animation />
```

---

### AppContainer

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/AppContainer.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/AppContainer.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | - |
| **className** | `string` | No | - | - |
| **style** | `object` | No | - | - |

**Usage Example:**
```jsx
import { AppContainer } from "@egovernments/digit-ui-components";

<AppContainer
  className="className"
  style={{}}
  children=""
>
  {/* Children elements go here */}
</AppContainer>
```

---

### AppHelpDrawer

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/AppHelpDrawer.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/AppHelpDrawer.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **closing** | `bool` | ✅ Yes | - | - |
| **handleClose** | `func` | ✅ Yes | - | - |
| **module** | `string` | ✅ Yes | - | - |
| **pathVar** | `string` | ✅ Yes | - | - |

**Usage Example:**
```jsx
import { AppHelpDrawer } from "@egovernments/digit-ui-components";

<AppHelpDrawer
  closing={false}
  handleClose={() => {}}
  module="module"
  pathVar="pathVar"
/>
```

---

### BackLink

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/BackLink.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/BackLink.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | `""` | - |
| **disabled** | `any` | No | `false` | - |
| **hideIcon** | `any` | No | `false` | - |
| **hideLabel** | `any` | No | `false` | - |
| **iconFill** | `any` | No | - | - |
| **label** | `any` | No | `""` | - |
| **onClick** | `func` | No | - | - |
| **style** | `object` | No | - | - |
| **variant** | `string` | No | `"primary"` | - |

**Usage Example:**
```jsx
import { BackLink } from "@egovernments/digit-ui-components";

<BackLink
  variant="primary"
  onClick={(e) => console.log('clicked')}
  disabled=false
  label=""
/>
```

---

### Banner

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Banner.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Banner.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **message** | `any` | ✅ Yes | - |  Banner message / |
| **successful** | `bool` | ✅ Yes | `true` |  Is banner is successful or error? / |
| **complaintNumber** | `any` | No | - |  If banner is successful, then show the complaint number / |

**Usage Example:**
```jsx
import { Banner } from "@egovernments/digit-ui-components";

<Banner
  successful=true
  message=""
/>
```

---

### BodyContainer

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/BodyContainer.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/BodyContainer.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | - |
| **className** | `string` | No | - | - |
| **style** | `object` | No | - | - |

**Usage Example:**
```jsx
import { BodyContainer } from "@egovernments/digit-ui-components";

<BodyContainer
  className="className"
  style={{}}
  children=""
>
  {/* Children elements go here */}
</BodyContainer>
```

---

### BreadCrumb

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/BreadCrumb.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/BreadCrumb.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | - | - |
| **crumbs** | `array` | No | - | - |
| **customSeparator** | `element` | No | - | - |
| **expandText** | `string` | No | - | - |
| **itemsAfterCollapse** | `number` | No | `2` | - |
| **itemsBeforeCollapse** | `number` | No | `1` | - |
| **maxItems** | `number` | No | `3` | - |
| **spanStyle** | `object` | No | `{` | - |
| **style** | `object` | No | - | - |

**Usage Example:**
```jsx
import { BreadCrumb } from "@egovernments/digit-ui-components";

<BreadCrumb
  crumbs={[]}
  className="className"
  style={{}}
/>
```

---

### BreakLine

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/BreakLine.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/BreakLine.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | `""` | - |
| **style** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { BreakLine } from "@egovernments/digit-ui-components";

<BreakLine
  className="className"
  style={{}}
/>
```

---

### Button

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Button.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Button.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **label** | `string` | ✅ Yes | `""` |  ButtonSelector content / |
| **onClick** | `func` | ✅ Yes | `() => {}` |  click handler / |
| **className** | `string` | No | - |  Custom classname / |
| **icon** | `string` | No | - |  button icon if any / |
| **id** | `string` | No | - |  Explicit ID for the button (optional - auto-generated if not provided) / |
| **isDisabled** | `bool` | No | - | - |
| **isSuffix** | `bool` | No | - |  button icon position / |
| **name** | `string` | No | - |  Semantic name for the button (used in auto-ID generation, not localized) / |
| **size** | `string` | No | `"large"` |  button size / |
| **style** | `object` | No | - |  Custom styles / |
| **textStyles** | `object` | No | - |  Custom label style or h2 style / |
| **variation** | `string` | No | `"primary"` |  button border theme / |

**Usage Example:**
```jsx
import { Button } from "@egovernments/digit-ui-components";

<Button
  label="Button"
  variation="primary"
  onClick=() => {}
  name="button"
/>
```

---

### ButtonGroup

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/ButtonGroup.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/ButtonGroup.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **buttonsArray** | `arrayOf(element)` | ✅ Yes | - | - |
| **equalButtons** | `bool` | No | - | - |
| **sortButtons** | `bool` | No | - | - |

**Usage Example:**
```jsx
import { ButtonGroup } from "@egovernments/digit-ui-components";

<ButtonGroup
  buttonsArray={[]}
/>
```

---

### ButtonSelector

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/ButtonSelector.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/ButtonSelector.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **label** | `string` | ✅ Yes | `""` |  ButtonSelector content / |
| **id** | `string` | No | - |  Explicit ID for the button (optional - auto-generated if not provided) / |
| **name** | `string` | No | - |  Semantic name for the button (used in auto-ID generation, not localized) / |
| **onSubmit** | `func` | No | `undefined` |  click handler / |
| **theme** | `string` | No | `""` |  button border theme / |

**Usage Example:**
```jsx
import { ButtonSelector } from "@egovernments/digit-ui-components";

<ButtonSelector
  label="ButtonSelector"
  name="buttonselector"
/>
```

---

### Card

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Card.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Card.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | - |
| **className** | `string` | No | - | - |
| **onClick** | `func` | No | - | - |
| **ReactRef** | `any` | No | - | - |
| **style** | `object` | No | `{}` | - |
| **type** | `string` | No | - | - |
| **variant** | `string` | No | - | - |

**Usage Example:**
```jsx
import { Card } from "@egovernments/digit-ui-components";

<Card
  type="type"
  variant="variant"
  onClick={(e) => console.log('clicked')}
/>
```

---

### CardBasedOptions

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CardBasedOptions.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CardBasedOptions.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **header** | `any` | No | - | - |
| **options** | `any` | No | - | - |
| **sideOption** | `any` | No | - | - |
| **style** | `any` | No | `{}` | - |
| **styles** | `any` | No | `{}` | - |

**Usage Example:**
```jsx
import { CardBasedOptions } from "@egovernments/digit-ui-components";

<CardBasedOptions
  options=""
/>
```

---

### CardCaption

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CardCaption.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CardCaption.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { CardCaption } from "@egovernments/digit-ui-components";

<CardCaption />
```

---

### CardHeader

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CardHeader.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CardHeader.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { CardHeader } from "@egovernments/digit-ui-components";

<CardHeader />
```

---

### CardLabel

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CardLabel.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CardLabel.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | ✅ Yes | - | - |
| **className** | `string` | No | - | - |
| **style** | `object` | No | - | - |

**Usage Example:**
```jsx
import { CardLabel } from "@egovernments/digit-ui-components";

<CardLabel
  children=""
>
  {/* Children elements go here */}
</CardLabel>
```

---

### CardLabelError

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CardLabelError.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CardLabelError.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | ✅ Yes | - | - |
| **className** | `string` | No | - | - |
| **style** | `object` | No | - | - |

**Usage Example:**
```jsx
import { CardLabelError } from "@egovernments/digit-ui-components";

<CardLabelError
  children=""
>
  {/* Children elements go here */}
</CardLabelError>
```

---

### CardText

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CardText.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CardText.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { CardText } from "@egovernments/digit-ui-components";

<CardText />
```

---

### CheckBox

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CheckBox.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CheckBox.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **label** | `string` | ✅ Yes | `"Default"` |  CheckBox content / |
| **checked** | `any` | No | `false` | - |
| **disabled** | `any` | No | - | - |
| **hideLabel** | `bool` | No | - | - |
| **index** | `any` | No | `0` | - |
| **inputRef** | `any` | No | - | - |
| **isIntermediate** | `bool` | No | `false` | - |
| **isLabelFirst** | `any` | No | `false` | - |
| **onChange** | `func` | No | `() => console.log("CLICK")` |  onChange func / |
| **pageType** | `any` | No | - | - |
| **ref** | `func` | No | `"ww"` |  input ref / |
| **removeMargin** | `any` | No | - | - |
| **required** | `bool` | No | - |  Shows required asterisk (*) beside label / |
| **style** | `any` | No | - | - |
| **userType** | `string` | No | - | - |
| **value** | `any` | No | `""` | - |

**Usage Example:**
```jsx
import { CheckBox } from "@egovernments/digit-ui-components";

<CheckBox
  label="Default"
  onChange=() => console.log("CLICK")
  value=""
  disabled=""
/>
```

---

### Chip

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Chip.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Chip.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **onClick** | `func` | ✅ Yes | - | - |
| **text** | `string` | ✅ Yes | `"ErrorChipWithError"` | - |
| **className** | `string` | No | - | - |
| **closeIconStyles** | `object` | No | - | - |
| **disabled** | `bool` | No | `false` | - |
| **error** | `string` | No | `"ErrorMessage"` | - |
| **extraStyles** | `shape({` | No | - | - |
| **hideClose** | `bool` | No | `true` | - |
| **iconReq** | `any` | No | - | - |
| **isErrorTag** | `bool` | No | `true` | - |
| **onErrorClick** | `any` | No | - | - |
| **onTagClick** | `any` | No | - | - |
| **tagStyles** | `object` | No | - | - |
| **textStyles** | `object` | No | - | - |

**Usage Example:**
```jsx
import { Chip } from "@egovernments/digit-ui-components";

<Chip
  text="ErrorChipWithError"
  onClick={(e) => console.log('clicked')}
  disabled=false
/>
```

---

### CitizenHomeCard

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CitizenHomeCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CitizenHomeCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **header** | `any` | No | - | - |
| **Icon** | `any` | No | - | - |
| **Info** | `any` | No | - | - |
| **isInfo** | `any` | No | `false` | - |
| **links** | `any` | No | `[]` | - |
| **state** | `any` | No | - | - |
| **styles** | `any` | No | - | - |

**Usage Example:**
```jsx
import { CitizenHomeCard } from "@egovernments/digit-ui-components";

<CitizenHomeCard
  header=""
  links=""
  state=""
/>
```

---

### CitizenInfoLabel

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CitizenInfoLabel.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CitizenInfoLabel.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **text** | `string` | ✅ Yes | - | - |
| **className** | `string` | No | - | - |
| **fill** | `string` | No | - | - |
| **info** | `string` | No | - | - |
| **props** | `object` | No | - | - |
| **showInfo** | `bool` | No | - | - |
| **style** | `object` | No | - | - |
| **textStyle** | `object` | No | - | - |

**Usage Example:**
```jsx
import { CitizenInfoLabel } from "@egovernments/digit-ui-components";

<CitizenInfoLabel
  text="text"
/>
```

---

### CollapseAndExpandGroups

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CollapseAndExpandGroups.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CollapseAndExpandGroups.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | - |
| **customClass** | `string` | No | `""` | - |
| **groupElements** | `bool` | No | `false` | - |
| **groupHeader** | `string` | No | `""` | - |
| **headerLabel** | `string` | No | `""` | - |
| **headerValue** | `string` | No | `""` | - |
| **style** | `object` | No | - | - |

**Usage Example:**
```jsx
import { CollapseAndExpandGroups } from "@egovernments/digit-ui-components";

<CollapseAndExpandGroups
  children=""
  style={{}}
  customClass="customClass"
>
  {/* Children elements go here */}
</CollapseAndExpandGroups>
```

---

### ConnectingCheckPoints

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/ConnectingCheckPoints.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/ConnectingCheckPoints.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { ConnectingCheckPoints } from "@egovernments/digit-ui-components";

<ConnectingCheckPoints />
```

---

### CustomSVG

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/CustomSVG.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/CustomSVG.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **/* Works Management  */
    NoResultsFoundIcon** | `any` | No | - | - |
| **AddFileFilled** | `any` | No | - | - |
| **AddFilled** | `any` | No | - | - |
| **AddIcon** | `any` | No | - | - |
| **AddIconNew** | `any` | No | - | - |
| **AddNewIcon** | `any` | No | - | - |
| **AddressBookIcon** | `any` | No | - | - |
| **AnnouncementIcon** | `any` | No | - | - |
| **ArrowBack** | `any` | No | - | - |
| **ArrowCollapseDown** | `any` | No | - | - |
| **ArrowCollapseUp** | `any` | No | - | - |
| **ArrowDirection** | `any` | No | - | - |
| **ArrowDown** | `any` | No | - | - |
| **ArrowForward** | `any` | No | - | - |
| **ArrowLeft** | `any` | No | - | - |
| **ArrowLeftWhite** | `any` | No | - | - |
| **ArrowRightInbox** | `any` | No | - | - |
| **ArrowToFirst** | `any` | No | - | - |
| **ArrowToLast** | `any` | No | - | - |
| **ArrowUp** | `any` | No | - | - |
| **ArrowVectorDown** | `any` | No | - | - |
| **AttendanceIcon** | `any` | No | - | - |
| **AttentionListIcon** | `any` | No | - | - |
| **BillsIcon** | `any` | No | - | - |
| **BioMetricIcon** | `any` | No | - | - |
| **BirthIcon** | `any` | No | - | - |
| **BPAHomeIcon** | `any` | No | - | - |
| **BPAIcon** | `any` | No | - | - |
| **CalendarIcon** | `any` | No | - | - |
| **Calender** | `any` | No | - | - |
| **CameraIcon** | `any` | No | - | - |
| **CameraSvg** | `any` | No | - | - |
| **CaseIcon** | `any` | No | - | - |
| **CheckboxSVG** | `any` | No | - | - |
| **CheckSvg** | `any` | No | - | - |
| **CitizenTruck** | `any` | No | - | - |
| **ClearWorkflowIcon** | `any` | No | - | - |
| **Clock** | `any` | No | - | - |
| **Close** | `any` | No | - | - |
| **CloseSvg** | `any` | No | - | - |
| **CollectionIcon** | `any` | No | - | - |
| **CollectionsBookmarIcons** | `any` | No | - | - |
| **ComplaintIcon** | `any` | No | - | - |
| **ContractIcon** | `any` | No | - | - |
| **CreateEstimateIcon** | `any` | No | - | - |
| **CreateLoiIcon** | `any` | No | - | - |
| **DashboardIcon** | `any` | No | - | - |
| **DeathIcon** | `any` | No | - | - |
| **DeleteBtn** | `any` | No | - | - |
| **DeleteIcon** | `any` | No | - | - |
| **DeleteIconv2** | `any` | No | - | - |
| **Details** | `any` | No | - | - |
| **Devices** | `any` | No | - | - |
| **DocdocUpload** | `any` | No | - | - |
| **DocFile** | `any` | No | - | - |
| **DocPdfUpload** | `any` | No | - | - |
| **DocumentIcon** | `any` | No | - | - |
| **DocumentIconSolid** | `any` | No | - | - |
| **DocumentSVG** | `any` | No | - | - |
| **DocUpload** | `any` | No | - | - |
| **DocXlsxUpload** | `any` | No | - | - |
| **DoubleTickIcon** | `any` | No | - | - |
| **DownloadBtnCommon** | `any` | No | - | - |
| **DownloadIcon** | `any` | No | - | - |
| **DownloadImgIcon** | `any` | No | - | - |
| **DownloadPrefixIcon** | `any` | No | - | - |
| **DownwardArrow** | `any` | No | - | - |
| **DropIcon** | `any` | No | - | - |
| **DuplicateIcon** | `any` | No | - | - |
| **DustbinIcon** | `any` | No | - | - |
| **DustbinIconNew** | `any` | No | - | - |
| **EDCRIcon** | `any` | No | - | - |
| **EditIcon** | `any` | No | - | - |
| **EditPencilIcon** | `any` | No | - | - |
| **Ellipsis** | `any` | No | - | - |
| **EmailIcon** | `any` | No | - | - |
| **EndStateIcon** | `any` | No | - | - |
| **ErrorIcon** | `any` | No | - | - |
| **ErrorSvg** | `any` | No | - | - |
| **EstimateIcon** | `any` | No | - | - |
| **EventCalendar** | `any` | No | - | - |
| **EventList** | `any` | No | - | - |
| **EventsIconSolid** | `any` | No | - | - |
| **ExpenditureIcon** | `any` | No | - | - |
| **ExternalLinkIcon** | `any` | No | - | - |
| **Feedback** | `any` | No | - | - |
| **FileIcon** | `any` | No | - | - |
| **FilterIcon** | `any` | No | - | - |
| **FilterSvg** | `any` | No | - | - |
| **FinanceChartIcon** | `any` | No | - | - |
| **FirenocIcon** | `any` | No | - | - |
| **FlowFilled** | `any` | No | - | - |
| **FlowUnfilled** | `any` | No | - | - |
| **FontDownload** | `any` | No | - | - |
| **FSMIcon** | `any` | No | - | - |
| **GalleryIcon** | `any` | No | - | - |
| **GenericFileIcon** | `any` | No | - | - |
| **GetApp** | `any` | No | - | - |
| **GotoInboxIcon** | `any` | No | - | - |
| **HamburgerIcon** | `any` | No | - | - |
| **HelperIcon** | `any` | No | - | - |
| **HelpIcon** | `any` | No | - | - |
| **HelpLineIcon** | `any` | No | - | - |
| **HistoryIcon** | `any` | No | - | - |
| **HRIcon** | `any` | No | - | - |
| **ImageIcon** | `any` | No | - | - |
| **InboxIcon** | `any` | No | - | - |
| **InfoBannerIcon** | `any` | No | - | - |
| **InfoIcon** | `any` | No | - | - |
| **InfoIconOutline** | `any` | No | - | - |
| **IntermediateStateIcon** | `any` | No | - | - |
| **JpgFile** | `any` | No | - | - |
| **LoadSampleIcon** | `any` | No | - | - |
| **LocateIcon** | `any` | No | - | - |
| **LocationIcon** | `any` | No | - | - |
| **ManageUsers** | `any` | No | - | - |
| **MapMarker** | `any` | No | - | - |
| **MCollectIcon** | `any` | No | - | - |
| **Microsoft** | `any` | No | - | - |
| **MuktaHomeIcon** | `any` | No | - | - |
| **NotificationBell** | `any` | No | - | - |
| **Numeric123** | `any` | No | - | - |
| **OBPSIcon** | `any` | No | - | - |
| **OBPSIconSolidBg** | `any` | No | - | - |
| **OrganisationIcon** | `any` | No | - | - |
| **PaymentIcon** | `any` | No | - | - |
| **PdfFile** | `any` | No | - | - |
| **PDFSvg** | `any` | No | - | - |
| **Person** | `any` | No | - | - |
| **PersonIcon** | `any` | No | - | - |
| **PGRIcon** | `any` | No | - | - |
| **Phone** | `any` | No | - | - |
| **PlaceholderSvg** | `any` | No | - | - |
| **PMBIcon** | `any` | No | - | - |
| **PMBIconSolid** | `any` | No | - | - |
| **PngFile** | `any` | No | - | - |
| **Poll** | `any` | No | - | - |
| **PrevIcon** | `any` | No | - | - |
| **PrimaryDownlaodIcon** | `any` | No | - | - |
| **PrintBtnCommon** | `any` | No | - | - |
| **PrintIcon** | `any` | No | - | - |
| **PrivacyMaskIcon** | `any` | No | - | - |
| **ProfileIcon** | `any` | No | - | - |
| **ProjectIcon** | `any` | No | - | - |
| **PropertyHouse** | `any` | No | - | - |
| **PTIcon** | `any` | No | - | - |
| **PushNotifIcon** | `any` | No | - | - |
| **RadioButtonChecked** | `any` | No | - | - |
| **ReceiptIcon** | `any` | No | - | - |
| **RefreshIcon** | `any` | No | - | - |
| **RefreshSVG** | `any` | No | - | - |
| **RemoveIcon** | `any` | No | - | - |
| **RoundedCheck** | `any` | No | - | - |
| **RupeeIcon** | `any` | No | - | - |
| **RupeeSymbol** | `any` | No | - | - |
| **SearchIcon** | `any` | No | - | - |
| **SearchIconSvg** | `any` | No | - | - |
| **ServiceCenterIcon** | `any` | No | - | - |
| **ShareIcon** | `any` | No | - | - |
| **ShippingTruck** | `any` | No | - | - |
| **SmsIcon** | `any` | No | - | - |
| **SortDown** | `any` | No | - | - |
| **SortSvg** | `any` | No | - | - |
| **SortUp** | `any` | No | - | - |
| **StarEmpty** | `any` | No | - | - |
| **StarFilled** | `any` | No | - | - |
| **StartStateIcon** | `any` | No | - | - |
| **SubtractIcon** | `any` | No | - | - |
| **SuccessSvg** | `any` | No | - | - |
| **SurveyIconSolid** | `any` | No | - | - |
| **TabInactive** | `any` | No | - | - |
| **TextAd** | `any` | No | - | - |
| **TickMark** | `any` | No | - | - |
| **TimerIcon** | `any` | No | - | - |
| **TLIcon** | `any` | No | - | - |
| **UndoIcon** | `any` | No | - | - |
| **UploadIcon** | `any` | No | - | - |
| **UpwardArrow** | `any` | No | - | - |
| **ValidityTimeIcon** | `any` | No | - | - |
| **VariableAdd** | `any` | No | - | - |
| **VariableAddFilled** | `any` | No | - | - |
| **ViewReportIcon** | `any` | No | - | - |
| **ViewsIcon** | `any` | No | - | - |
| **WageseekerIcon** | `any` | No | - | - |
| **WarningIcon** | `any` | No | - | - |
| **WhatsappIcon** | `any` | No | - | - |
| **WhatsappIconGreen** | `any` | No | - | - |
| **WorksMgmtIcon** | `any` | No | - | - |
| **WSICon** | `any` | No | - | - |
| **XlsxFile** | `any` | No | - | - |
| **ZoomToFitIcon** | `any` | No | - | - |

**Usage Example:**
```jsx
import { CustomSVG } from "@egovernments/digit-ui-components";

<CustomSVG
  Microsoft=""
  VariableAdd=""
  FlowFilled=""
/>
```

---

### DatePicker

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/DatePicker.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/DatePicker.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **date** | `any` | No | - | - |
| **defaultValue** | `any` | No | - | - |
| **disabled** | `bool` | No | - | - |
| **max** | `any` | No | - | - |
| **min** | `any` | No | - | - |
| **onChange** | `func` | No | - | - |

**Usage Example:**
```jsx
import { DatePicker } from "@egovernments/digit-ui-components";

<DatePicker
  disabled={false}
  onChange={(value) => console.log(value)}
/>
```

---

### DisplayPhotos

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/DisplayPhotos.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/DisplayPhotos.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **onClick** | `func` | No | - |  optional click handler / |
| **srcs** | `array` | No | `[]` |  images / |

**Usage Example:**
```jsx
import { DisplayPhotos } from "@egovernments/digit-ui-components";

<DisplayPhotos
  onClick={(e) => console.log('clicked')}
/>
```

---

### Divider

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Divider.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Divider.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | `""` | - |
| **style** | `object` | No | `{}` | - |
| **variant** | `any` | No | `"small"` | - |

**Usage Example:**
```jsx
import { Divider } from "@egovernments/digit-ui-components";

<Divider
  variant="small"
/>
```

---

### Dropdown

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Dropdown.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Dropdown.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **customSelector** | `any` | No | `null` | - |
| **disablePortal** | `bool` | No | `false` | - |
| **isSearchable** | `any` | No | `true` | - |
| **option** | `array` | No | - | - |
| **optionKey** | `any` | No | - | - |
| **select** | `any` | No | - | - |
| **selected** | `any` | No | - | - |
| **showArrow** | `bool` | No | `true` | - |
| **style** | `object` | No | - | - |
| **t** | `func` | No | - | - |

**Usage Example:**
```jsx
import { Dropdown } from "@egovernments/digit-ui-components";

<Dropdown
  selected=""
/>
```

---

### ErrorMessage

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/ErrorMessage.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/ErrorMessage.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | `""` | - |
| **iconStyles** | `any` | No | `{}` | - |
| **maxLength** | `any` | No | - | - |
| **message** | `string` | No | - | - |
| **showIcon** | `bool` | No | - | - |
| **style** | `object` | No | `{}` | - |
| **truncateMessage** | `bool` | No | - | - |
| **wrapperClassName** | `any` | No | `""` | - |
| **wrapperStyles** | `any` | No | `{}` | - |

**Usage Example:**
```jsx
import { ErrorMessage } from "@egovernments/digit-ui-components";

<ErrorMessage
  className="className"
  style={{}}
  message="message"
/>
```

---

### FileUpload

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/FileUpload.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/FileUpload.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **accept** | `string` | No | - | - |
| **buttonType** | `string` | No | - | - |
| **customClass** | `string` | No | - | - |
| **disableButton** | `bool` | No | `false` | - |
| **disabled** | `bool` | No | - | - |
| **hintText** | `string` | No | - | - |
| **id** | `string` | No | - | - |
| **inputStyles** | `object` | No | - | - |
| **iserror** | `string` | No | - | - |
| **label** | `string` | No | - | - |
| **multiple** | `bool` | No | - | - |
| **onDelete** | `func` | No | - | - |
| **onUpload** | `func` | No | - | - |
| **removeTargetedFile** | `func` | No | - | - |
| **showAsPreview** | `bool` | No | - | - |
| **showAsTags** | `bool` | No | - | - |
| **showDownloadButton** | `bool` | No | - | - |
| **showHint** | `bool` | No | - | - |
| **showLabel** | `bool` | No | - | - |
| **showReUploadButton** | `bool` | No | - | - |
| **uploadedFiles** | `arrayOf(` | No | - | - |

**Usage Example:**
```jsx
import { FileUpload } from "@egovernments/digit-ui-components";

<FileUpload
  label="FileUpload"
  disabled={false}
/>
```

---

### Footer

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Footer.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Footer.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | - | custom class of the svg icon |
| **style** | `object` | No | - | custom style of the svg icon |

**Usage Example:**
```jsx
import { Footer } from "@egovernments/digit-ui-components";

<Footer
  className="className"
  style={{}}
/>
```

---

### Hamburger

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Hamburger.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Hamburger.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **icon** | `node` | ✅ Yes | - | - |
| **label** | `string` | ✅ Yes | - | - |
| **className** | `any` | No | - | - |
| **closeOnClickOutside** | `any` | No | - | - |
| **hideUserManuals** | `any` | No | - | - |
| **isSearchable** | `bool` | No | - | - |
| **items** | `arrayOf(` | No | - | - |
| **onLogout** | `any` | No | - | - |
| **onOutsideClick** | `any` | No | - | - |
| **onSelect** | `any` | No | - | - |
| **path** | `string` | No | - | - |
| **profile** | `any` | No | - | - |
| **profileName** | `string` | No | - | - |
| **profileNumber** | `string` | No | - | - |
| **reopenOnLogout** | `bool` | No | - | - |
| **styles** | `any` | No | - | - |
| **theme** | `any` | No | `"dark"` | - |
| **userManualLabel** | `string` | No | - | - |
| **usermanuals** | `any` | No | - | - |

**Usage Example:**
```jsx
import { Hamburger } from "@egovernments/digit-ui-components";

<Hamburger
  icon=""
  label="Hamburger"
/>
```

---

### HamburgerButton

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/HamburgerButton.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/HamburgerButton.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `any` | No | - | - |
| **color** | `any` | No | - | - |
| **handleClick** | `any` | No | - | - |

**Usage Example:**
```jsx
import { HamburgerButton } from "@egovernments/digit-ui-components";

<HamburgerButton
  handleClick=""
  color=""
  className=""
/>
```

---

### Header

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Header.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Header.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **actionFields** | `any` | No | - | - |
| **className** | `string` | No | - | - |
| **img** | `string` | No | `undefined` | - |
| **logo** | `string` | No | - | - |
| **onHamburgerClick** | `func` | No | - | - |
| **onImageClick** | `func` | No | - | - |
| **onLogoClick** | `func` | No | - | - |
| **props** | `object` | No | - | - |
| **setImageToLeft** | `bool` | No | - | - |
| **style** | `object` | No | - | - |
| **theme** | `string` | No | - | - |
| **ulb** | `any` | No | - | - |

**Usage Example:**
```jsx
import { Header } from "@egovernments/digit-ui-components";

<Header
  img="img"
  className="className"
  style={{}}
/>
```

---

### HeaderBar

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/HeaderBar.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/HeaderBar.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **end** | `any` | No | `""` | - |
| **main** | `any` | No | `""` | - |
| **start** | `any` | No | `""` | - |

**Usage Example:**
```jsx
import { HeaderBar } from "@egovernments/digit-ui-components";

<HeaderBar
  start=""
  main=""
  end=""
/>
```

---

### HeaderComponent

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/HeaderComponent.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/HeaderComponent.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | - |
| **className** | `string` | No | - | - |
| **styles** | `object` | No | - | - |

**Usage Example:**
```jsx
import { HeaderComponent } from "@egovernments/digit-ui-components";

<HeaderComponent
  className="className"
  styles={{}}
  children=""
>
  {/* Children elements go here */}
</HeaderComponent>
```

---

### HelpInfoCard

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/HelpInfoCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/HelpInfoCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **appPath** | `any` | No | - | - |
| **config** | `any` | No | `helpCardConfig` | - |
| **location** | `any` | No | - | - |

**Usage Example:**
```jsx
import { HelpInfoCard } from "@egovernments/digit-ui-components";

<HelpInfoCard
  config=helpCardConfig
  appPath=""
  location=""
/>
```

---

### HomeFooter

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/HomeFooter.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/HomeFooter.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { HomeFooter } from "@egovernments/digit-ui-components";

<HomeFooter />
```

---

### HorizontalNav

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/HorizontalNav.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/HorizontalNav.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **activeLink** | `any` | No | - | - |
| **children** | `any` | No | - | - |
| **configNavItems** | `any` | No | - | - |
| **customClassName** | `any` | No | `""` | - |
| **customStyle** | `any` | No | `{}` | - |
| **inFormComposer** | `any` | No | `true` | - |
| **navClassName** | `any` | No | `""` | - |
| **navStyles** | `any` | No | `{}` | - |
| **setActiveLink** | `any` | No | - | - |
| **showNav** | `any` | No | `false` | - |

**Usage Example:**
```jsx
import { HorizontalNav } from "@egovernments/digit-ui-components";

<HorizontalNav
  configNavItems=""
  activeLink=""
  setActiveLink=""
/>
```

---

### InboxSearchLinks

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/InboxSearchLinks.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/InboxSearchLinks.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **businessService** | `any` | No | - | - |
| **customClass** | `any` | No | `""` | - |
| **headerText** | `any` | No | - | - |
| **links** | `any` | No | - | - |
| **logoIcon** | `any` | No | - | - |

**Usage Example:**
```jsx
import { InboxSearchLinks } from "@egovernments/digit-ui-components";

<InboxSearchLinks
  headerText=""
  links=""
  businessService=""
/>
```

---

### InfoButton

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/InfoButton.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/InfoButton.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **label** | `string` | ✅ Yes | `""` |  ButtonSelector content / |
| **onClick** | `func` | ✅ Yes | `() => {}` |  click handler / |
| **className** | `string` | No | - |  Custom classname / |
| **icon** | `string` | No | - |  button icon if any / |
| **infobuttontype** | `string` | No | `"info"` | - |
| **isDisabled** | `bool` | No | - | - |
| **isSuffix** | `bool` | No | - |  button icon position / |
| **size** | `string` | No | - |  button size / |
| **style** | `object` | No | - |  Custom styles / |
| **textStyles** | `object` | No | - |  Custom label style or h2 style / |

**Usage Example:**
```jsx
import { InfoButton } from "@egovernments/digit-ui-components";

<InfoButton
  label="InfoButton"
  onClick=() => {}
/>
```

---

### InputTextAmount

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/InputTextAmount.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/InputTextAmount.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **inputRef** | `oneOfType([func` | No | - | - |
| **intlConfig** | `object` | No | `getIntlConfig(prefix)` | - |
| **onChange** | `func` | No | - | - |
| **otherProps** | `object` | No | - | - |
| **prefix** | `string` | No | `"₹ "` | - |
| **value** | `oneOfType([number` | No | - | - |
| **variant** | `any` | No | - | - |

**Usage Example:**
```jsx
import { InputTextAmount } from "@egovernments/digit-ui-components";

<InputTextAmount
  value={0}
  onChange={(value) => console.log(value)}
  variant=""
/>
```

---

### KeyNote

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/KeyNote.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/KeyNote.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **caption** | `any` | No | - | - |
| **children** | `any` | No | - | - |
| **className** | `any` | No | `""` | - |
| **keyValue** | `string` | No | `""` | - |
| **note** | `oneOfType([string` | No | `""` | - |
| **noteStyle** | `any` | No | `{}` | - |
| **privacy** | `any` | No | - | - |
| **style** | `any` | No | `{}` | - |

**Usage Example:**
```jsx
import { KeyNote } from "@egovernments/digit-ui-components";

<KeyNote
  keyValue="keyValue"
  note="note"
  noteStyle=""
/>
```

---

### LabelFieldPair

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/LabelFieldPair.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/LabelFieldPair.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | ✅ Yes | - | - |
| **className** | `string` | No | - | - |
| **removeMargin** | `bool` | No | - | - |
| **style** | `object` | No | - | - |
| **vertical** | `bool` | No | - | - |

**Usage Example:**
```jsx
import { LabelFieldPair } from "@egovernments/digit-ui-components";

<LabelFieldPair
  children=""
>
  {/* Children elements go here */}
</LabelFieldPair>
```

---

### LinkLabel

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/LinkLabel.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/LinkLabel.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { LinkLabel } from "@egovernments/digit-ui-components";

<LinkLabel />
```

---

### Loader

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Loader.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Loader.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **animationStyles** | `object` | No | - | custom styles for animation |
| **className** | `string` | No | - | custom class |
| **loaderText** | `string` | No | - | custom loader text |
| **style** | `object` | No | `{` | custom styles |
| **variant** | `string` | No | `"Basic"` | variant |

**Usage Example:**
```jsx
import { Loader } from "@egovernments/digit-ui-components";

<Loader
  variant="Basic"
/>
```

---

### Menu

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Menu.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Menu.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **onSelect** | `func` | ✅ Yes | `() => {}` | - |
| **optionsKey** | `string` | ✅ Yes | - | - |
| **isSearchable** | `bool` | No | - | - |
| **options** | `array` | No | `[]` | - |
| **showBottom** | `bool` | No | - | - |
| **style** | `object` | No | - | - |

**Usage Example:**
```jsx
import { Menu } from "@egovernments/digit-ui-components";

<Menu
  options={[]}
  optionsKey="optionsKey"
  onSelect=() => {}
/>
```

---

### MobileNumber

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/MobileNumber.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/MobileNumber.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **autoFocus** | `bool` | No | - | - |
| **className** | `string` | No | - | - |
| **countryCodeConfig** | `shape({` | No | - | - |
| **defaultCountryCode** | `string` | No | - | - |
| **disable** | `bool` | No | - | - |
| **errorStyle** | `bool` | No | - | - |
| **hideSpan** | `bool` | No | `true` | - |
| **inputRef** | `oneOfType([func` | No | - | - |
| **isMandatory** | `bool` | No | `false` | - |
| **masterName** | `string` | No | - | - |
| **max** | `number` | No | - | - |
| **maxLength** | `number` | No | - | - |
| **min** | `number` | No | - | - |
| **minlength** | `number` | No | - | - |
| **moduleName** | `string` | No | - | - |
| **name** | `string` | No | - | - |
| **onBlur** | `func` | No | - | - |
| **onChange** | `func` | No | - | - |
| **pattern** | `string` | No | - | - |
| **placeholder** | `string` | No | - | - |
| **showCountryCodeDropdown** | `bool` | No | `false` | - |
| **step** | `string` | No | - | - |
| **style** | `object` | No | - | - |
| **title** | `string` | No | - | - |
| **userType** | `string` | No | - | - |
| **value** | `any` | No | - | - |

**Usage Example:**
```jsx
import { MobileNumber } from "@egovernments/digit-ui-components";

<MobileNumber
  name="mobilenumber"
  placeholder="Enter mobilenumber..."
  onChange={(value) => console.log(value)}
  value=""
/>
```

---

### MultiSelectDropdown

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/MultiSelectDropdown.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/MultiSelectDropdown.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **onSelect** | `func` | ✅ Yes | - | - |
| **options** | `array` | ✅ Yes | `nestedOptions` | - |
| **optionsKey** | `string` | ✅ Yes | - | - |
| **addCategorySelectAllCheck** | `any` | No | `false` | - |
| **addSelectAllCheck** | `any` | No | `false` | - |
| **categorySelectAllLabel** | `any` | No | `""` | - |
| **chipsKey** | `any` | No | - | - |
| **composerId** | `any` | No | - | - |
| **composerType** | `any` | No | - | - |
| **config** | `object` | No | - | - |
| **defaultLabel** | `string` | No | `""` | - |
| **defaultUnit** | `string` | No | `""` | - |
| **disableClearAll** | `bool` | No | `false` | - |
| **disabled** | `any` | No | - | - |
| **disablePortal** | `bool` | No | `false` | - |
| **frozenData** | `any` | No | `[]` | - |
| **handleViewMore** | `any` | No | - | - |
| **id** | `any` | No | - | - |
| **isPropsNeeded** | `bool` | No | `false` | - |
| **isSearchable** | `any` | No | `false` | - |
| **name** | `any` | No | `"nestedmultiselectoptions"` | - |
| **onChipClose** | `func` | No | - | - |
| **onClose** | `any` | No | - | - |
| **props** | `object` | No | - | - |
| **restrictSelection** | `any` | No | `false` | - |
| **screenPath** | `any` | No | - | - |
| **sectionId** | `any` | No | - | - |
| **selectAllLabel** | `any` | No | `""` | - |
| **selected** | `array` | No | `[]` | - |
| **ServerStyle** | `object` | No | `{}` | - |
| **variant** | `any` | No | `"nestedmultiselect"` | - |

**Usage Example:**
```jsx
import { MultiSelectDropdown } from "@egovernments/digit-ui-components";

<MultiSelectDropdown
  options=nestedOptions
  optionsKey="optionsKey"
  selected={[]}
  onSelect={() => {}}
  disabled=""
  variant="nestedmultiselect"
  name="nestedmultiselectoptions"
/>
```

---

### NestedTable

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/NestedTable.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/NestedTable.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **nestedData** | `arrayOf(object)` | ✅ Yes | - | - |
| **rowIndex** | `number` | ✅ Yes | - | - |
| **toggleRowExpansion** | `func` | ✅ Yes | - | - |

**Usage Example:**
```jsx
import { NestedTable } from "@egovernments/digit-ui-components";

<NestedTable
  nestedData={[]}
  toggleRowExpansion={() => {}}
  rowIndex={0}
/>
```

---

### NoResultsFound

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/NoResultsFound.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/NoResultsFound.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | - | - |
| **height** | `number` | No | `262` | - |
| **style** | `object` | No | - | - |
| **width** | `number` | No | `336` | - |

**Usage Example:**
```jsx
import { NoResultsFound } from "@egovernments/digit-ui-components";

<NoResultsFound
  style={{}}
  className="className"
  height=262
/>
```

---

### OTPInput

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/OTPInput.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/OTPInput.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `any` | No | - | - |
| **composerId** | `any` | No | - | - |
| **composerType** | `any` | No | - | - |
| **id** | `any` | No | - | - |
| **inline** | `any` | No | - | - |
| **label** | `any` | No | - | - |
| **length** | `any` | No | `6` | - |
| **masking** | `any` | No | `false` | - |
| **name** | `any` | No | - | - |
| **onChange** | `any` | No | - | - |
| **placeholder** | `any` | No | - | - |
| **screenPath** | `any` | No | - | - |
| **sectionId** | `any` | No | - | - |
| **style** | `any` | No | - | - |
| **type** | `any` | No | `"numeric"` | - |

**Usage Example:**
```jsx
import { OTPInput } from "@egovernments/digit-ui-components";

<OTPInput
  type="numeric"
  onChange={(e) => {}}
  placeholder=""
  label=""
  name=""
/>
```

---

### Panels

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Panels.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Panels.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | - | - |
| **customIcon** | `string` | No | - | - |
| **iconFill** | `string` | No | - | - |
| **info** | `string` | No | - | - |
| **message** | `string` | No | - | - |
| **multipleResponses** | `array` | No | - | - |
| **response** | `string` | No | - | - |
| **showAsSvg** | `bool` | No | - | - |
| **style** | `object` | No | - | - |
| **type** | `string` | No | `"success"` | - |

**Usage Example:**
```jsx
import { Panels } from "@egovernments/digit-ui-components";

<Panels
  type="success"
/>
```

---

### Paragraph

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Paragraph.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Paragraph.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { Paragraph } from "@egovernments/digit-ui-components";

<Paragraph />
```

---

### PlusMinusInput

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/PlusMinusInput.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/PlusMinusInput.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { PlusMinusInput } from "@egovernments/digit-ui-components";

<PlusMinusInput />
```

---

### PopUp

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/PopUp.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/PopUp.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | - |
| **className** | `string` | No | - | - |
| **footerChildren** | `node` | No | - | - |
| **footerclassName** | `string` | No | - | - |
| **headerChildren** | `node` | No | - | - |
| **headerclassName** | `string` | No | - | - |
| **onClose** | `func` | No | - | - |
| **onOverlayClick** | `func` | No | - | - |
| **style** | `object` | No | - | - |
| **type** | `string` | No | - | - |

**Usage Example:**
```jsx
import { PopUp } from "@egovernments/digit-ui-components";

<PopUp
  type="type"
/>
```

---

### PrivateRoute

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/PrivateRoute.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/PrivateRoute.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **element** | `element` | ✅ Yes | - | - |
| **roles** | `arrayOf(string)` | No | - | - |

**Usage Example:**
```jsx
import { PrivateRoute } from "@egovernments/digit-ui-components";

<PrivateRoute
  element=""
/>
```

---

### RadioButtons

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/RadioButtons.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/RadioButtons.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **innerStyles** | `any` | No | - | - |
| **onSelect** | `func` | No | - | - |
| **options** | `any` | No | - | - |
| **optionsKey** | `string` | No | - | - |
| **selectedOption** | `any` | No | - | - |
| **style** | `any` | No | - | - |

**Usage Example:**
```jsx
import { RadioButtons } from "@egovernments/digit-ui-components";

<RadioButtons
  options=""
/>
```

---

### Rating

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Rating.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Rating.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | `""` | - |
| **currentRating** | `number` | No | `0` | - |
| **id** | `string` | No | `"0"` | - |
| **maxRating** | `number` | No | `5` | - |
| **onFeedback** | `func` | No | `() => {}` | - |
| **starStyles** | `object` | No | `{}` | - |
| **styles** | `object` | No | `{}` | - |
| **text** | `string` | No | `""` | - |
| **withText** | `bool` | No | `false` | - |

**Usage Example:**
```jsx
import { Rating } from "@egovernments/digit-ui-components";

<Rating
  maxRating=5
  currentRating=0
  onFeedback=() => {}
/>
```

---

### RoundedLabel

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/RoundedLabel.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/RoundedLabel.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **count** | `any` | No | - | - |

**Usage Example:**
```jsx
import { RoundedLabel } from "@egovernments/digit-ui-components";

<RoundedLabel
  count=""
/>
```

---

### SearchComponent

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/SearchComponent.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/SearchComponent.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **activeLink** | `any` | No | - | - |
| **browserSession** | `any` | No | - | - |
| **data** | `any` | No | - | - |
| **fullConfig** | `any` | No | - | - |
| **header** | `any` | No | `""` | - |
| **onClearSearch** | `any` | No | - | - |
| **onTabChange** | `any` | No | - | - |
| **screenType** | `any` | No | `"search"` | - |
| **showTab** | `any` | No | - | - |
| **showTabCount** | `any` | No | `false` | - |
| **tabData** | `any` | No | - | - |
| **uiConfig** | `any` | No | - | - |

**Usage Example:**
```jsx
import { SearchComponent } from "@egovernments/digit-ui-components";

<SearchComponent
  uiConfig=""
  header=""
  screenType="search"
/>
```

---

### SelectionTag

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/SelectionTag.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/SelectionTag.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **code** | `string` | ✅ Yes | - | - |
| **name** | `string` | ✅ Yes | - | - |
| **onSelectionChanged** | `func` | ✅ Yes | - | - |
| **allowMultipleSelection** | `bool` | No | `true` | - |
| **errorMessage** | `string` | No | - | - |
| **options** | `arrayOf(` | No | - | - |
| **optionsKey** | `any` | No | `"name"` | - |
| **populators** | `any` | No | `{}` | - |
| **prefixIcon** | `node` | No | - | - |
| **selected** | `any` | No | - | - |
| **suffixIcon** | `node` | No | - | - |
| **width** | `number` | No | - | - |
| **withContainer** | `any` | No | - | - |

**Usage Example:**
```jsx
import { SelectionTag } from "@egovernments/digit-ui-components";

<SelectionTag
  options={[]}
  name="selectiontag"
  code="code"
  onSelectionChanged={() => {}}
  selected=""
/>
```

---

### SideNav

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/SideNav.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/SideNav.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **label** | `string` | ✅ Yes | - | - |
| **children** | `array` | No | - | - |
| **className** | `any` | No | - | - |
| **collapsedWidth** | `string` | No | `"80px"` | - |
| **enableSearch** | `bool` | No | `true` | - |
| **expandedWidth** | `string` | No | `"250px"` | - |
| **hideAccessbilityTools** | `bool` | No | - | - |
| **icon** | `object` | No | - | - |
| **items** | `arrayOf(` | No | - | - |
| **onBottomItemClick** | `any` | No | - | - |
| **onSelect** | `any` | No | - | - |
| **path** | `string` | No | - | - |
| **styles** | `object` | No | `{}` | - |
| **theme** | `oneOf(["dark"` | No | `"dark"` | - |
| **transitionDuration** | `number` | No | `0.3` | - |
| **variant** | `oneOf(["primary"` | No | `"primary"` | - |

**Usage Example:**
```jsx
import { SideNav } from "@egovernments/digit-ui-components";

<SideNav
  label="SideNav"
  variant="primary"
/>
```

---

### SidePanel

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/SidePanel.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/SidePanel.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **addClose** | `bool` | No | - | - |
| **bgActive** | `bool` | No | `false` | - |
| **children** | `node` | No | - | - |
| **className** | `string` | No | `""` | - |
| **closedContents** | `node` | No | - | - |
| **closedFooter** | `node` | No | - | - |
| **closedHeader** | `node` | No | - | - |
| **closedSections** | `arrayOf(node)` | No | - | - |
| **defaultClosedWidth** | `number` | No | - | - |
| **defaultOpenWidth** | `number` | No | - | - |
| **footer** | `node` | No | - | - |
| **header** | `node` | No | - | - |
| **hideArrow** | `bool` | No | - | - |
| **hideScrollIcon** | `bool` | No | - | - |
| **isDraggable** | `bool` | No | `false` | - |
| **isOverlay** | `bool` | No | `false` | - |
| **onClose** | `any` | No | `null` | - |
| **position** | `oneOf(["left"` | No | `"right"` | - |
| **sections** | `arrayOf(node)` | No | `[]` | - |
| **styles** | `object` | No | `{}` | - |
| **transitionDuration** | `number` | No | - | - |
| **type** | `oneOf(["static"` | No | `"static"` | - |

**Usage Example:**
```jsx
import { SidePanel } from "@egovernments/digit-ui-components";

<SidePanel
  type="static"
/>
```

---

### Stepper

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Stepper.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Stepper.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **activeSteps** | `any` | No | - | - |
| **className** | `any` | No | - | - |
| **currentStep** | `any` | No | `1` | - |
| **customSteps** | `any` | No | - | - |
| **direction** | `any` | No | `"vertical"` | - |
| **hideDivider** | `any` | No | - | - |
| **onStepClick** | `any` | No | - | - |
| **props** | `any` | No | - | - |
| **style** | `any` | No | - | - |
| **totalSteps** | `any` | No | - | - |

**Usage Example:**
```jsx
import { Stepper } from "@egovernments/digit-ui-components";

<Stepper
  currentStep=1
  onStepClick={(e) => {}}
  totalSteps=""
/>
```

---

### StringManipulator

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/StringManipulator.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/StringManipulator.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **functionName** | `string` | No | - | - |
| **key** | `string` | No | - | - |
| **props** | `object` | No | - | - |

**Usage Example:**
```jsx
import { StringManipulator } from "@egovernments/digit-ui-components";

<StringManipulator
  functionName="functionName"
  key="key"
  props={{}}
/>
```

---

### SubmitBar

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/SubmitBar.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/SubmitBar.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **id** | `string` | No | - |  Explicit ID for the button (optional - auto-generated if not provided) / |
| **label** | `string` | No | - |  SubmitButton contents / |
| **name** | `string` | No | - |  Semantic name for the button (used in auto-ID generation, not localized) / |
| **onSubmit** | `func` | No | - |  Optional click handler / |
| **style** | `object` | No | - |  style for the button / |
| **submit** | `any` | No | - |  Is it a normal button or submit button? / |

**Usage Example:**
```jsx
import { SubmitBar } from "@egovernments/digit-ui-components";

<SubmitBar
  label="SubmitBar"
  name="submitbar"
/>
```

---

### SummaryCardFieldPair

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/SummaryCardFieldPair.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/SummaryCardFieldPair.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | - | - |
| **inline** | `bool` | No | - | - |
| **label** | `string` | No | - | - |
| **renderCustomContent** | `func` | No | - | - |
| **style** | `object` | No | - | - |
| **type** | `oneOf(["text"` | No | - | - |
| **value** | `string` | No | - | - |

**Usage Example:**
```jsx
import { SummaryCardFieldPair } from "@egovernments/digit-ui-components";

<SummaryCardFieldPair
  label="SummaryCardFieldPair"
  value="value"
  type=""
/>
```

---

### SVG

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/SVG.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/SVG.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **Accessibility: createSVGWrapper(Accessibility, "Accessibility")** | `any` | No | - | - |
| **AccessibilityNew: createSVGWrapper(AccessibilityNew, "Accessibility New")** | `any` | No | - | - |
| **Accessible: createSVGWrapper(Accessible, "Accessible")** | `any` | No | - | - |
| **AccessibleForward: createSVGWrapper(AccessibleForward, "Accessible Forward")** | `any` | No | - | - |
| **AccountBalance: createSVGWrapper(AccountBalance, "Account Balance")** | `any` | No | - | - |
| **AccountBalanceWallet: createSVGWrapper(AccountBalanceWallet, "Account Balance Wallet")** | `any` | No | - | - |
| **AccountBox: createSVGWrapper(AccountBox, "Account Box")** | `any` | No | - | - |
| **AccountCircle: createSVGWrapper(AccountCircle, "Account Circle")** | `any` | No | - | - |
| **AddAlert: createSVGWrapper(AddAlert, "Add Alert")** | `any` | No | - | - |
| **AddBusiness: createSVGWrapper(AddBusiness, "Add Business")** | `any` | No | - | - |
| **AddChart: createSVGWrapper(AddChart, "Add Chart")** | `any` | No | - | - |
| **AddExpense: createSVGWrapper(AddExpense, "Add Expense")** | `any` | No | - | - |
| **AddExpenseTwo: createSVGWrapper(AddExpenseTwo, "Add Expense Two")** | `any` | No | - | - |
| **AddIcCall: createSVGWrapper(AddIcCall, "Add Call")** | `any` | No | - | - |
| **AddLocation: createSVGWrapper(AddLocation, "Add Location")** | `any` | No | - | - |
| **AddLocationAlt: createSVGWrapper(AddLocationAlt, "Add Alternate Location")** | `any` | No | - | - |
| **AddModerator: createSVGWrapper(AddModerator, "Add Moderator")** | `any` | No | - | - |
| **AddRoad: createSVGWrapper(AddRoad, "Add Road")** | `any` | No | - | - |
| **AddShoppingCart: createSVGWrapper(AddShoppingCart, "Add to Shopping Cart")** | `any` | No | - | - |
| **AddTask: createSVGWrapper(AddTask, "Add Task")** | `any` | No | - | - |
| **AddToDrive: createSVGWrapper(AddToDrive, "Add to Drive")** | `any` | No | - | - |
| **AdminPanelSettings: createSVGWrapper(AdminPanelSettings, "Admin Panel Settings")** | `any` | No | - | - |
| **Agriculture: createSVGWrapper(Agriculture, "Agriculture")** | `any` | No | - | - |
| **Alarm: createSVGWrapper(Alarm, "Alarm")** | `any` | No | - | - |
| **AlarmAdd: createSVGWrapper(AlarmAdd, "Add Alarm")** | `any` | No | - | - |
| **AlarmOff: createSVGWrapper(AlarmOff, "Alarm Off")** | `any` | No | - | - |
| **AlarmOn: createSVGWrapper(AlarmOn, "Alarm On")** | `any` | No | - | - |
| **AllInbox: createSVGWrapper(AllInbox, "All Inbox")** | `any` | No | - | - |
| **AllOut: createSVGWrapper(AllOut, "All Out")** | `any` | No | - | - |
| **AlternateEmail: createSVGWrapper(AlternateEmail, "Alternate Email")** | `any` | No | - | - |
| **AltRoute: createSVGWrapper(AltRoute, "Alternate Route")** | `any` | No | - | - |
| **Analytics: createSVGWrapper(Analytics, "Analytics")** | `any` | No | - | - |
| **Anchor: createSVGWrapper(Anchor, "Anchor")** | `any` | No | - | - |
| **Android: createSVGWrapper(Android, "Android")** | `any` | No | - | - |
| **Announcement: createSVGWrapper(Announcement, "Announcement")** | `any` | No | - | - |
| **Api: createSVGWrapper(Api, "API")** | `any` | No | - | - |
| **AppBlocking: createSVGWrapper(AppBlocking, "App Blocking")** | `any` | No | - | - |
| **AppRegistration: createSVGWrapper(AppRegistration, "App Registration")** | `any` | No | - | - |
| **Approval: createSVGWrapper(Approval, "Approval")** | `any` | No | - | - |
| **Apps: createSVGWrapper(Apps, "Apps")** | `any` | No | - | - |
| **AppSettingsAlt: createSVGWrapper(AppSettingsAlt, "App Settings Alternate")** | `any` | No | - | - |
| **Architecture: createSVGWrapper(Architecture, "Architecture")** | `any` | No | - | - |
| **ArrowBack: createSVGWrapper(ArrowBack, "Arrow Back")** | `any` | No | - | - |
| **ArrowBackIos: createSVGWrapper(ArrowBackIos, "Arrow Back IOS")** | `any` | No | - | - |
| **ArrowCircleDown: createSVGWrapper(ArrowCircleDown, "Arrow Circle Down")** | `any` | No | - | - |
| **ArrowCircleUp: createSVGWrapper(ArrowCircleUp, "Arrow Circle Up")** | `any` | No | - | - |
| **ArrowDownward: createSVGWrapper(ArrowDownward, "Arrow Downward")** | `any` | No | - | - |
| **ArrowDropDown: createSVGWrapper(ArrowDropDown, "Arrow Drop Down")** | `any` | No | - | - |
| **ArrowDropDownCircle: createSVGWrapper(ArrowDropDownCircle, "Arrow Drop Down Circle")** | `any` | No | - | - |
| **ArrowDropUp: createSVGWrapper(ArrowDropUp, "Arrow Drop Up")** | `any` | No | - | - |
| **ArrowForward: createSVGWrapper(ArrowForward, "Arrow Forward")** | `any` | No | - | - |
| **ArrowForwardIos: createSVGWrapper(ArrowForwardIos, "Arrow Forward IOS")** | `any` | No | - | - |
| **ArrowForwardIosAlt: createSVGWrapper(ArrowForwardIosAlt, "Arrow Forward IOS Alternate")** | `any` | No | - | - |
| **ArrowLeft: createSVGWrapper(ArrowLeft, "Arrow Left")** | `any` | No | - | - |
| **ArrowRight: createSVGWrapper(ArrowRight, "Arrow Right")** | `any` | No | - | - |
| **ArrowRightAlt: createSVGWrapper(ArrowRightAlt, "Arrow Right Alternate")** | `any` | No | - | - |
| **ArrowUpward: createSVGWrapper(ArrowUpward, "Arrow Upward")** | `any` | No | - | - |
| **Article: createSVGWrapper(Article, "Article")** | `any` | No | - | - |
| **AspectRatio: createSVGWrapper(AspectRatio, "Aspect Ratio")** | `any` | No | - | - |
| **Assessment: createSVGWrapper(Assessment, "Assessment")** | `any` | No | - | - |
| **Assignment: createSVGWrapper(Assignment, "Assignment")** | `any` | No | - | - |
| **AssignmentInd: createSVGWrapper(AssignmentInd, "Assignment Individual")** | `any` | No | - | - |
| **AssignmentLate: createSVGWrapper(AssignmentLate, "Assignment Late")** | `any` | No | - | - |
| **AssignmentReturn: createSVGWrapper(AssignmentReturn, "Assignment Return")** | `any` | No | - | - |
| **AssignmentReturned: createSVGWrapper(AssignmentReturned, "Assignment Returned")** | `any` | No | - | - |
| **AssignmentTurnedIn: createSVGWrapper(AssignmentTurnedIn, "Assignment Turned In")** | `any` | No | - | - |
| **AssistantDirection: createSVGWrapper(AssistantDirection, "Assistant Direction")** | `any` | No | - | - |
| **AssistantNavigation: createSVGWrapper(AssistantNavigation, "Assistant Navigation")** | `any` | No | - | - |
| **Atm: createSVGWrapper(Atm, "ATM")** | `any` | No | - | - |
| **AttachEmail: createSVGWrapper(AttachEmail, "Attach Email")** | `any` | No | - | - |
| **Attachment: createSVGWrapper(Attachment, "Attachment")** | `any` | No | - | - |
| **Attractions: createSVGWrapper(Attractions, "Attractions")** | `any` | No | - | - |
| **AutoDelete: createSVGWrapper(AutoDelete, "Auto Delete")** | `any` | No | - | - |
| **AutoRenew: createSVGWrapper(AutoRenew, "Auto Renew")** | `any` | No | - | - |
| **Backup: createSVGWrapper(Backup, "Backup")** | `any` | No | - | - |
| **BackupTable: createSVGWrapper(BackupTable, "Backup Table")** | `any` | No | - | - |
| **Badge: createSVGWrapper(Badge, "Badge")** | `any` | No | - | - |
| **BakeryDining: createSVGWrapper(BakeryDining, "Bakery Dining")** | `any` | No | - | - |
| **BatchPrediction: createSVGWrapper(BatchPrediction, "Batch Prediction")** | `any` | No | - | - |
| **BeenHere: createSVGWrapper(BeenHere, "Been Here")** | `any` | No | - | - |
| **BikeScooter: createSVGWrapper(BikeScooter, "Bike Scooter")** | `any` | No | - | - |
| **Book: createSVGWrapper(Book, "Book")** | `any` | No | - | - |
| **Bookmark: createSVGWrapper(Bookmark, "Bookmark")** | `any` | No | - | - |
| **BookmarkBorder: createSVGWrapper(BookmarkBorder, "Bookmark Border")** | `any` | No | - | - |
| **Bookmarks: createSVGWrapper(Bookmarks, "Bookmarks")** | `any` | No | - | - |
| **BookOnline: createSVGWrapper(BookOnline, "Book Online")** | `any` | No | - | - |
| **BreakfastDining: createSVGWrapper(BreakfastDining, "Breakfast Dining")** | `any` | No | - | - |
| **BrunchDining: createSVGWrapper(BrunchDining, "Brunch Dining")** | `any` | No | - | - |
| **BugReport: createSVGWrapper(BugReport, "Bug Report")** | `any` | No | - | - |
| **Build: createSVGWrapper(Build, "Build")** | `any` | No | - | - |
| **BuildCircle: createSVGWrapper(BuildCircle, "Build Circle")** | `any` | No | - | - |
| **BusAlert: createSVGWrapper(BusAlert, "Bus Alert")** | `any` | No | - | - |
| **Business: createSVGWrapper(Business, "Business")** | `any` | No | - | - |
| **Cached: createSVGWrapper(Cached, "Cached")** | `any` | No | - | - |
| **Cake: createSVGWrapper(Cake, "Cake")** | `any` | No | - | - |
| **CalendarToday: createSVGWrapper(CalendarToday, "Calendar Today")** | `any` | No | - | - |
| **CalendarViewDay: createSVGWrapper(CalendarViewDay, "Calendar View Day")** | `any` | No | - | - |
| **Call: createSVGWrapper(Call, "Call")** | `any` | No | - | - |
| **CallEnd: createSVGWrapper(CallEnd, "Call End")** | `any` | No | - | - |
| **CallMade: createSVGWrapper(CallMade, "Call Made")** | `any` | No | - | - |
| **CallMerge: createSVGWrapper(CallMerge, "Call Merge")** | `any` | No | - | - |
| **CallMissed: createSVGWrapper(CallMissed, "Call Missed")** | `any` | No | - | - |
| **CallMissedOutgoing: createSVGWrapper(CallMissedOutgoing, "Call Missed Outgoing")** | `any` | No | - | - |
| **CallReceived: createSVGWrapper(CallReceived, "Call Received")** | `any` | No | - | - |
| **CallSplit: createSVGWrapper(CallSplit, "Call Split")** | `any` | No | - | - |
| **CameraEnhance: createSVGWrapper(CameraEnhance, "Camera Enhance")** | `any` | No | - | - |
| **Campaign: createSVGWrapper(Campaign, "Campaign")** | `any` | No | - | - |
| **Cancel: createSVGWrapper(Cancel, "Cancel")** | `any` | No | - | - |
| **CancelPresentation: createSVGWrapper(CancelPresentation, "Cancel Presentation")** | `any` | No | - | - |
| **CancelScheduleSend: createSVGWrapper(CancelScheduleSend, "Cancel Schedule Send")** | `any` | No | - | - |
| **CardGiftcard: createSVGWrapper(CardGiftcard, "Card Giftcard")** | `any` | No | - | - |
| **CardMembership: createSVGWrapper(CardMembership, "Card Membership")** | `any` | No | - | - |
| **CardTravel: createSVGWrapper(CardTravel, "Card Travel")** | `any` | No | - | - |
| **CarRental: createSVGWrapper(CarRental, "Car Rental")** | `any` | No | - | - |
| **CarRepair: createSVGWrapper(CarRepair, "Car Repair")** | `any` | No | - | - |
| **Category: createSVGWrapper(Category, "Category")** | `any` | No | - | - |
| **Celebration: createSVGWrapper(Celebration, "Celebration")** | `any` | No | - | - |
| **CellWifi: createSVGWrapper(CellWifi, "Cell Wifi")** | `any` | No | - | - |
| **ChangeHistory: createSVGWrapper(ChangeHistory, "Change History")** | `any` | No | - | - |
| **Chat: createSVGWrapper(Chat, "Chat")** | `any` | No | - | - |
| **ChatBubble: createSVGWrapper(ChatBubble, "Chat Bubble")** | `any` | No | - | - |
| **ChatBubbleOutline: createSVGWrapper(ChatBubbleOutline, "Chat Bubble Outline")** | `any` | No | - | - |
| **Check: createSVGWrapper(Check, "Check")** | `any` | No | - | - |
| **CheckCircle: createSVGWrapper(CheckCircle, "Check Circle")** | `any` | No | - | - |
| **CheckCircleOutline: createSVGWrapper(CheckCircleOutline, "Check Circle Outline")** | `any` | No | - | - |
| **ChevronLeft: createSVGWrapper(ChevronLeft, "Chevron Left")** | `any` | No | - | - |
| **ChevronRight: createSVGWrapper(ChevronRight, "Chevron Right")** | `any` | No | - | - |
| **ChromeReaderMode: createSVGWrapper(ChromeReaderMode, "Chrome Reader Mode")** | `any` | No | - | - |
| **CircleNotifications: createSVGWrapper(CircleNotifications, "Circle Notifications")** | `any` | No | - | - |
| **Class: createSVGWrapper(Class, "Class")** | `any` | No | - | - |
| **className** | `string` | No | - | custom class of the svg icon |
| **CleanHands: createSVGWrapper(CleanHands, "Clean Hands")** | `any` | No | - | - |
| **CleaningServices: createSVGWrapper(CleaningServices, "Cleaning Services")** | `any` | No | - | - |
| **ClearAll: createSVGWrapper(ClearAll, "Clear All")** | `any` | No | - | - |
| **Clock: createSVGWrapper(Clock, "Clock")** | `any` | No | - | - |
| **Close: createSVGWrapper(Close, "Close")** | `any` | No | - | - |
| **CloseFullscreen: createSVGWrapper(CloseFullscreen, "Close Fullscreen")** | `any` | No | - | - |
| **Cloud: createSVGWrapper(Cloud, "Cloud")** | `any` | No | - | - |
| **CloudCircle: createSVGWrapper(CloudCircle, "Cloud Circle")** | `any` | No | - | - |
| **CloudDone: createSVGWrapper(CloudDone, "Cloud Done")** | `any` | No | - | - |
| **CloudDownload: createSVGWrapper(CloudDownload, "Cloud Download")** | `any` | No | - | - |
| **CloudOff: createSVGWrapper(CloudOff, "Cloud Off")** | `any` | No | - | - |
| **CloudQueue: createSVGWrapper(CloudQueue, "Cloud Queue")** | `any` | No | - | - |
| **CloudUpload: createSVGWrapper(CloudUpload, "Cloud Upload")** | `any` | No | - | - |
| **Code: createSVGWrapper(Code, "Code")** | `any` | No | - | - |
| **Comment: createSVGWrapper(Comment, "Comment")** | `any` | No | - | - |
| **CommentBank: createSVGWrapper(CommentBank, "Comment Bank")** | `any` | No | - | - |
| **Commute: createSVGWrapper(Commute, "Commute")** | `any` | No | - | - |
| **CompareArrows: createSVGWrapper(CompareArrows, "Compare Arrows")** | `any` | No | - | - |
| **CompassCalibration: createSVGWrapper(CompassCalibration, "Compass Calibration")** | `any` | No | - | - |
| **Compress: createSVGWrapper(Compress, "Compress")** | `any` | No | - | - |
| **ConnectWithoutContact: createSVGWrapper(ConnectWithoutContact, "Connect Without Contact")** | `any` | No | - | - |
| **Construction: createSVGWrapper(Construction, "Construction")** | `any` | No | - | - |
| **Contactless: createSVGWrapper(Contactless, "Contactless")** | `any` | No | - | - |
| **ContactMail: createSVGWrapper(ContactMail, "Contact Mail")** | `any` | No | - | - |
| **ContactPage: createSVGWrapper(ContactPage, "Contact Page")** | `any` | No | - | - |
| **ContactPhone: createSVGWrapper(ContactPhone, "Contact Phone")** | `any` | No | - | - |
| **Contacts: createSVGWrapper(Contacts, "Contacts")** | `any` | No | - | - |
| **ContactSupport: createSVGWrapper(ContactSupport, "Contact Support")** | `any` | No | - | - |
| **Copyright: createSVGWrapper(Copyright, "Copyright")** | `any` | No | - | - |
| **Coronavirus: createSVGWrapper(Coronavirus, "Coronavirus")** | `any` | No | - | - |
| **CreateNewFolder: createSVGWrapper(CreateNewFolder, "Create New Folder")** | `any` | No | - | - |
| **CreditCard: createSVGWrapper(CreditCard, "Credit Card")** | `any` | No | - | - |
| **Cut: createSVGWrapper(Cut, "Cut")** | `any` | No | - | - |
| **Dangerous: createSVGWrapper(Dangerous, "Dangerous")** | `any` | No | - | - |
| **Dashboard: createSVGWrapper(Dashboard, "Dashboard")** | `any` | No | - | - |
| **DashboardCustomize: createSVGWrapper(DashboardCustomize, "Dashboard Customize")** | `any` | No | - | - |
| **DateRange: createSVGWrapper(DateRange, "Date Range")** | `any` | No | - | - |
| **Deck: createSVGWrapper(Deck, "Deck")** | `any` | No | - | - |
| **Delete: createSVGWrapper(Delete, "Delete")** | `any` | No | - | - |
| **DeleteForever: createSVGWrapper(DeleteForever, "Delete Forever")** | `any` | No | - | - |
| **DeleteOutline: createSVGWrapper(DeleteOutline, "Delete Outline")** | `any` | No | - | - |
| **DeliveryDining: createSVGWrapper(DeliveryDining, "Delivery Dining")** | `any` | No | - | - |
| **DepartureBoard: createSVGWrapper(DepartureBoard, "Departure Board")** | `any` | No | - | - |
| **Description: createSVGWrapper(Description, "Description")** | `any` | No | - | - |
| **DesignServices: createSVGWrapper(DesignServices, "Design Services")** | `any` | No | - | - |
| **DesktopAccessDisabled: createSVGWrapper(DesktopAccessDisabled, "Desktop Access Disabled")** | `any` | No | - | - |
| **DialerSip: createSVGWrapper(DialerSip, "Dialer Sip")** | `any` | No | - | - |
| **Dialpad: createSVGWrapper(Dialpad, "Dialpad")** | `any` | No | - | - |
| **DinnerDining: createSVGWrapper(DinnerDining, "Dinner Dining")** | `any` | No | - | - |
| **Directions: createSVGWrapper(Directions, "Directions")** | `any` | No | - | - |
| **DirectionsBike: createSVGWrapper(DirectionsBike, "Directions Bike")** | `any` | No | - | - |
| **DirectionsBoat: createSVGWrapper(DirectionsBoat, "Directions Boat")** | `any` | No | - | - |
| **DirectionsBus: createSVGWrapper(DirectionsBus, "Directions Bus")** | `any` | No | - | - |
| **DirectionsCar: createSVGWrapper(DirectionsCar, "Directions Car")** | `any` | No | - | - |
| **DirectionsRailway: createSVGWrapper(DirectionsRailway, "Directions Railway")** | `any` | No | - | - |
| **DirectionsRun: createSVGWrapper(DirectionsRun, "Directions Run")** | `any` | No | - | - |
| **DirectionsSubway: createSVGWrapper(DirectionsSubway, "Directions Subway")** | `any` | No | - | - |
| **DirectionsTransit: createSVGWrapper(DirectionsTransit, "Directions Transit")** | `any` | No | - | - |
| **DirectionsWalk: createSVGWrapper(DirectionsWalk, "Directions Walk")** | `any` | No | - | - |
| **DisabledByDefault: createSVGWrapper(DisabledByDefault, "Disabled By Default")** | `any` | No | - | - |
| **Dns: createSVGWrapper(Dns, "DNS")** | `any` | No | - | - |
| **Domain: createSVGWrapper(Domain, "Domain")** | `any` | No | - | - |
| **DomainDisabled: createSVGWrapper(DomainDisabled, "Domain Disabled")** | `any` | No | - | - |
| **DomainVerification: createSVGWrapper(DomainVerification, "Domain Verification")** | `any` | No | - | - |
| **Done: createSVGWrapper(Done, "Done")** | `any` | No | - | - |
| **DoneAll: createSVGWrapper(DoneAll, "Done All")** | `any` | No | - | - |
| **DoneOutline: createSVGWrapper(DoneOutline, "Done Outline")** | `any` | No | - | - |
| **DonutLarge: createSVGWrapper(DonutLarge, "Donut Large")** | `any` | No | - | - |
| **DonutSmall: createSVGWrapper(DonutSmall, "Donut Small")** | `any` | No | - | - |
| **DoubleArrow: createSVGWrapper(DoubleArrow, "Double Arrow")** | `any` | No | - | - |
| **DragIndicator: createSVGWrapper(DragIndicator, "Drag Indicator")** | `any` | No | - | - |
| **DriveFileMove: createSVGWrapper(DriveFileMove, "Drive File Move")** | `any` | No | - | - |
| **DriveFileMoveOutline: createSVGWrapper(DriveFileMoveOutline, "Drive File Move Outline")** | `any` | No | - | - |
| **DriveFileRenameOutline: createSVGWrapper(DriveFileRenameOutline, "Drive File Rename Outline")** | `any` | No | - | - |
| **DriveFolderUpload: createSVGWrapper(DriveFolderUpload, "Drive Folder Upload")** | `any` | No | - | - |
| **DryCleaning: createSVGWrapper(DryCleaning, "Dry Cleaning")** | `any` | No | - | - |
| **DSOTruck: createSVGWrapper(DSOTruck, "DSO Truck")** | `any` | No | - | - |
| **Duo: createSVGWrapper(Duo, "Duo")** | `any` | No | - | - |
| **DynamicForm: createSVGWrapper(DynamicForm, "Dynamic Form")** | `any` | No | - | - |
| **East: createSVGWrapper(East, "East")** | `any` | No | - | - |
| **Eco: createSVGWrapper(Eco, "Eco")** | `any` | No | - | - |
| **Edit: createSVGWrapper(Edit, "Edit")** | `any` | No | - | - |
| **EditAttributes: createSVGWrapper(EditAttributes, "Edit Attributes")** | `any` | No | - | - |
| **EditLocation: createSVGWrapper(EditLocation, "Edit Location")** | `any` | No | - | - |
| **EditOff: createSVGWrapper(EditOff, "Edit Off")** | `any` | No | - | - |
| **EditRoad: createSVGWrapper(EditRoad, "Edit Road")** | `any` | No | - | - |
| **Eject: createSVGWrapper(Eject, "Eject")** | `any` | No | - | - |
| **Elderly: createSVGWrapper(Elderly, "Elderly")** | `any` | No | - | - |
| **ElectricalServices: createSVGWrapper(ElectricalServices, "Electrical Services")** | `any` | No | - | - |
| **ElectricBike: createSVGWrapper(ElectricBike, "Electric Bike")** | `any` | No | - | - |
| **ElectricCar: createSVGWrapper(ElectricCar, "Electric Car")** | `any` | No | - | - |
| **ElectricMoped: createSVGWrapper(ElectricMoped, "Electric Moped")** | `any` | No | - | - |
| **ElectricRickshaw: createSVGWrapper(ElectricRickshaw, "Electric Rickshaw")** | `any` | No | - | - |
| **ElectricScooter: createSVGWrapper(ElectricScooter, "Electric Scooter")** | `any` | No | - | - |
| **Email: createSVGWrapper(Email, "Email")** | `any` | No | - | - |
| **EmojiEmotions: createSVGWrapper(EmojiEmotions, "Emoji Emotions")** | `any` | No | - | - |
| **EmojiEvents: createSVGWrapper(EmojiEvents, "Emoji Events")** | `any` | No | - | - |
| **EmojiFlags: createSVGWrapper(EmojiFlags, "Emoji Flags")** | `any` | No | - | - |
| **EmojiFoodBeverage: createSVGWrapper(EmojiFoodBeverage, "Emoji Food Beverage")** | `any` | No | - | - |
| **EmojiNature: createSVGWrapper(EmojiNature, "Emoji Nature")** | `any` | No | - | - |
| **EmojiObjects: createSVGWrapper(EmojiObjects, "Emoji Objects")** | `any` | No | - | - |
| **EmojiPeople: createSVGWrapper(EmojiPeople, "Emoji People")** | `any` | No | - | - |
| **EmojiSymbols: createSVGWrapper(EmojiSymbols, "Emoji Symbols")** | `any` | No | - | - |
| **EmojiTransportation: createSVGWrapper(EmojiTransportation, "Emoji Transportation")** | `any` | No | - | - |
| **Engineering: createSVGWrapper(Engineering, "Engineering")** | `any` | No | - | - |
| **Error: createSVGWrapper(Error, "Error")** | `any` | No | - | - |
| **ErrorOutline: createSVGWrapper(ErrorOutline, "Error Outline")** | `any` | No | - | - |
| **EuroSymbol: createSVGWrapper(EuroSymbol, "Euro Symbol")** | `any` | No | - | - |
| **Event: createSVGWrapper(Event, "Event")** | `any` | No | - | - |
| **EventSeat: createSVGWrapper(EventSeat, "Event Seat")** | `any` | No | - | - |
| **EvStation: createSVGWrapper(EvStation, "EV Station")** | `any` | No | - | - |
| **ExitToApp: createSVGWrapper(ExitToApp, "Exit To App")** | `any` | No | - | - |
| **Expand: createSVGWrapper(Expand, "Expand")** | `any` | No | - | - |
| **ExpandLess: createSVGWrapper(ExpandLess, "Expand Less")** | `any` | No | - | - |
| **ExpandMore: createSVGWrapper(ExpandMore, "Expand More")** | `any` | No | - | - |
| **Explore: createSVGWrapper(Explore, "Explore")** | `any` | No | - | - |
| **ExploreOff: createSVGWrapper(ExploreOff, "Explore Off")** | `any` | No | - | - |
| **Extension: createSVGWrapper(Extension, "Extension")** | `any` | No | - | - |
| **Face: createSVGWrapper(Face, "Face")** | `any` | No | - | - |
| **Facebook: createSVGWrapper(Facebook, "Facebook")** | `any` | No | - | - |
| **FactCheck: createSVGWrapper(FactCheck, "Fact Check")** | `any` | No | - | - |
| **Fastfood: createSVGWrapper(Fastfood, "Fastfood")** | `any` | No | - | - |
| **Favorite: createSVGWrapper(Favorite, "Favorite")** | `any` | No | - | - |
| **FavoriteBorder: createSVGWrapper(FavoriteBorder, "Favorite Border")** | `any` | No | - | - |
| **Feedback: createSVGWrapper(Feedback, "Feedback")** | `any` | No | - | - |
| **Festival: createSVGWrapper(Festival, "Festival")** | `any` | No | - | - |
| **File: createSVGWrapper(File, "File")** | `any` | No | - | - |
| **FileDownload: createSVGWrapper(FileDownload, "File Download")** | `any` | No | - | - |
| **FileDownloadDone: createSVGWrapper(FileDownloadDone, "File Download Done")** | `any` | No | - | - |
| **FilePresent: createSVGWrapper(FilePresent, "File Present")** | `any` | No | - | - |
| **FileUpload: createSVGWrapper(FileUpload, "File Upload")** | `any` | No | - | - |
| **fill** | `string` | No | - | custom colour of the svg icon |
| **FilterAlt: createSVGWrapper(FilterAlt, "Filter Alternate")** | `any` | No | - | - |
| **FilterListAlt: createSVGWrapper(FilterListAlt, "Filter List Alternate")** | `any` | No | - | - |
| **FindInPage: createSVGWrapper(FindInPage, "Find In Page")** | `any` | No | - | - |
| **FindReplace: createSVGWrapper(FindReplace, "Find Replace")** | `any` | No | - | - |
| **Fingerprint: createSVGWrapper(Fingerprint, "Fingerprint")** | `any` | No | - | - |
| **Fireplace: createSVGWrapper(Fireplace, "Fireplace")** | `any` | No | - | - |
| **FirstPage: createSVGWrapper(FirstPage, "First Page")** | `any` | No | - | - |
| **FirstPageAlt: createSVGWrapper(FirstPageAlt, "First Page Alternate")** | `any` | No | - | - |
| **FitScreen: createSVGWrapper(FitScreen, "Fit Screen")** | `any` | No | - | - |
| **Flaky: createSVGWrapper(Flaky, "Flaky")** | `any` | No | - | - |
| **Flight: createSVGWrapper(Flight, "Flight")** | `any` | No | - | - |
| **FlightLand: createSVGWrapper(FlightLand, "Flight Land")** | `any` | No | - | - |
| **FlightTakeoff: createSVGWrapper(FlightTakeoff, "Flight Takeoff")** | `any` | No | - | - |
| **FlipToBack: createSVGWrapper(FlipToBack, "Flip To Back")** | `any` | No | - | - |
| **FlipToFront: createSVGWrapper(FlipToFront, "Flip To Front")** | `any` | No | - | - |
| **Folder: createSVGWrapper(Folder, "Folder")** | `any` | No | - | - |
| **FolderOpen: createSVGWrapper(FolderOpen, "Folder Open")** | `any` | No | - | - |
| **FolderShared: createSVGWrapper(FolderShared, "Folder Shared")** | `any` | No | - | - |
| **FollowTheSigns: createSVGWrapper(FollowTheSigns, "Follow The Signs")** | `any` | No | - | - |
| **Forum: createSVGWrapper(Forum, "Forum")** | `any` | No | - | - |
| **ForwardToInbox: createSVGWrapper(ForwardToInbox, "Forward To Inbox")** | `any` | No | - | - |
| **Fullscreen: createSVGWrapper(Fullscreen, "Fullscreen")** | `any` | No | - | - |
| **FullscreenExit: createSVGWrapper(FullscreenExit, "Fullscreen Exit")** | `any` | No | - | - |
| **Gavel: createSVGWrapper(Gavel, "Gavel")** | `any` | No | - | - |
| **GetApp: createSVGWrapper(GetApp, "Get App")** | `any` | No | - | - |
| **Gif: createSVGWrapper(Gif, "GIF")** | `any` | No | - | - |
| **Grade: createSVGWrapper(Grade, "Grade")** | `any` | No | - | - |
| **Grading: createSVGWrapper(Grading, "Grading")** | `any` | No | - | - |
| **GridView: createSVGWrapper(GridView, "Grid View")** | `any` | No | - | - |
| **Group: createSVGWrapper(Group, "Group")** | `any` | No | - | - |
| **GroupAdd: createSVGWrapper(GroupAdd, "Group Add")** | `any` | No | - | - |
| **Groups: createSVGWrapper(Groups, "Groups")** | `any` | No | - | - |
| **GroupWork: createSVGWrapper(GroupWork, "Group Work")** | `any` | No | - | - |
| **GTranslate: createSVGWrapper(GTranslate, "Google Translate")** | `any` | No | - | - |
| **Hail: createSVGWrapper(Hail, "Hail")** | `any` | No | - | - |
| **Handyman: createSVGWrapper(Handyman, "Handyman")** | `any` | No | - | - |
| **Hardware: createSVGWrapper(Hardware, "Hardware")** | `any` | No | - | - |
| **height** | `string` | No | - | custom height of the svg icon |
| **Help: createSVGWrapper(Help, "Help")** | `any` | No | - | - |
| **HelpCenter: createSVGWrapper(HelpCenter, "Help Center")** | `any` | No | - | - |
| **HelpOutline: createSVGWrapper(HelpOutline, "Help Outline")** | `any` | No | - | - |
| **HighlightAlt: createSVGWrapper(HighlightAlt, "Highlight Alternate")** | `any` | No | - | - |
| **HighlightOff: createSVGWrapper(HighlightOff, "Highlight Off")** | `any` | No | - | - |
| **History: createSVGWrapper(History, "History")** | `any` | No | - | - |
| **HistoryEdu: createSVGWrapper(HistoryEdu, "History Education")** | `any` | No | - | - |
| **HistoryToggleOff: createSVGWrapper(HistoryToggleOff, "History Toggle Off")** | `any` | No | - | - |
| **Home: createSVGWrapper(Home, "Home")** | `any` | No | - | - |
| **HomeFilled: createSVGWrapper(HomeFilled, "Home Filled")** | `any` | No | - | - |
| **HomeRepairService: createSVGWrapper(HomeRepairService, "Home Repair Service")** | `any` | No | - | - |
| **HomeWork: createSVGWrapper(HomeWork, "Home Work")** | `any` | No | - | - |
| **HorizontalSplit: createSVGWrapper(HorizontalSplit, "Horizontal Split")** | `any` | No | - | - |
| **Hotel: createSVGWrapper(Hotel, "Hotel")** | `any` | No | - | - |
| **HourglassBottom: createSVGWrapper(HourglassBottom, "Hourglass Bottom")** | `any` | No | - | - |
| **HourglassDisabled: createSVGWrapper(HourglassDisabled, "Hourglass Disabled")** | `any` | No | - | - |
| **HourglassEmpty: createSVGWrapper(HourglassEmpty, "Hourglass Empty")** | `any` | No | - | - |
| **HourglassFull: createSVGWrapper(HourglassFull, "Hourglass Full")** | `any` | No | - | - |
| **HourglassTop: createSVGWrapper(HourglassTop, "Hourglass Top")** | `any` | No | - | - |
| **Http: createSVGWrapper(Http, "HTTP")** | `any` | No | - | - |
| **Https: createSVGWrapper(Https, "HTTPS")** | `any` | No | - | - |
| **Hvac: createSVGWrapper(Hvac, "HVAC")** | `any` | No | - | - |
| **Icecream: createSVGWrapper(Icecream, "Icecream")** | `any` | No | - | - |
| **IconSwerage: createSVGWrapper(IconSwerage, "Sewerage Icon")** | `any` | No | - | - |
| **IconSwerageAlt: createSVGWrapper(IconSwerageAlt, "Sewerage Icon Alternate")** | `any` | No | - | - |
| **ImportantDevices: createSVGWrapper(ImportantDevices, "Important Devices")** | `any` | No | - | - |
| **ImportContacts: createSVGWrapper(ImportContacts, "Import Contacts")** | `any` | No | - | - |
| **ImportExport: createSVGWrapper(ImportExport, "Import Export")** | `any` | No | - | - |
| **Info: createSVGWrapper(Info, "Info")** | `any` | No | - | - |
| **InfoOutline: createSVGWrapper(InfoOutline, "Info Outline")** | `any` | No | - | - |
| **Input: createSVGWrapper(Input, "Input")** | `any` | No | - | - |
| **IntegrationInstructions: createSVGWrapper(IntegrationInstructions, "Integration Instructions")** | `any` | No | - | - |
| **InvertColors: createSVGWrapper(InvertColors, "Invert Colors")** | `any` | No | - | - |
| **InvertColorsOff: createSVGWrapper(InvertColorsOff, "Invert Colors Off")** | `any` | No | - | - |
| **IosShare: createSVGWrapper(IosShare, "IOS Share")** | `any` | No | - | - |
| **KingBed: createSVGWrapper(KingBed, "King Bed")** | `any` | No | - | - |
| **Label: createSVGWrapper(Label, "Label")** | `any` | No | - | - |
| **LabelImportant: createSVGWrapper(LabelImportant, "Label Important")** | `any` | No | - | - |
| **LabelImportantOutline: createSVGWrapper(LabelImportantOutline, "Label Important Outline")** | `any` | No | - | - |
| **LabelOff: createSVGWrapper(LabelOff, "Label Off")** | `any` | No | - | - |
| **LabelOutline: createSVGWrapper(LabelOutline, "Label Outline")** | `any` | No | - | - |
| **Language: createSVGWrapper(Language, "Language")** | `any` | No | - | - |
| **LastPage: createSVGWrapper(LastPage, "Last Page")** | `any` | No | - | - |
| **LastPageAlt: createSVGWrapper(LastPageAlt, "Last Page Alternate")** | `any` | No | - | - |
| **Launch: createSVGWrapper(Launch, "Launch")** | `any` | No | - | - |
| **Layers: createSVGWrapper(Layers, "Layers")** | `any` | No | - | - |
| **LayersClear: createSVGWrapper(LayersClear, "Layers Clear")** | `any` | No | - | - |
| **Leaderboard: createSVGWrapper(Leaderboard, "Leaderboard")** | `any` | No | - | - |
| **LegendToggle: createSVGWrapper(LegendToggle, "Legend Toggle")** | `any` | No | - | - |
| **Lightbulb: createSVGWrapper(Lightbulb, "Lightbulb")** | `any` | No | - | - |
| **LightbulbOutline: createSVGWrapper(LightbulbOutline, "Lightbulb Outline")** | `any` | No | - | - |
| **LineStyle: createSVGWrapper(LineStyle, "Line Style")** | `any` | No | - | - |
| **LineWeight: createSVGWrapper(LineWeight, "Line Weight")** | `any` | No | - | - |
| **Liquor: createSVGWrapper(Liquor, "Liquor")** | `any` | No | - | - |
| **List: createSVGWrapper(List, "List")** | `any` | No | - | - |
| **ListAlt: createSVGWrapper(ListAlt, "List Alternate")** | `any` | No | - | - |
| **LiveHelp: createSVGWrapper(LiveHelp, "Live Help")** | `any` | No | - | - |
| **LocalActivity: createSVGWrapper(LocalActivity, "Local Activity")** | `any` | No | - | - |
| **LocalAirport: createSVGWrapper(LocalAirport, "Local Airport")** | `any` | No | - | - |
| **LocalAtm: createSVGWrapper(LocalAtm, "Local ATM")** | `any` | No | - | - |
| **LocalBar: createSVGWrapper(LocalBar, "Local Bar")** | `any` | No | - | - |
| **LocalCafe: createSVGWrapper(LocalCafe, "Local Cafe")** | `any` | No | - | - |
| **LocalCarWash: createSVGWrapper(LocalCarWash, "Local Car Wash")** | `any` | No | - | - |
| **LocalConvenienceStore: createSVGWrapper(LocalConvenienceStore, "Local Convenience Store")** | `any` | No | - | - |
| **LocalDining: createSVGWrapper(LocalDining, "Local Dining")** | `any` | No | - | - |
| **LocalDrink: createSVGWrapper(LocalDrink, "Local Drink")** | `any` | No | - | - |
| **LocalFireDepartment: createSVGWrapper(LocalFireDepartment, "Local Fire Department")** | `any` | No | - | - |
| **LocalFlorist: createSVGWrapper(LocalFlorist, "Local Florist")** | `any` | No | - | - |
| **LocalGasStation: createSVGWrapper(LocalGasStation, "Local Gas Station")** | `any` | No | - | - |
| **LocalGroceryStore: createSVGWrapper(LocalGroceryStore, "Local Grocery Store")** | `any` | No | - | - |
| **LocalHospital: createSVGWrapper(LocalHospital, "Local Hospital")** | `any` | No | - | - |
| **LocalHotel: createSVGWrapper(LocalHotel, "Local Hotel")** | `any` | No | - | - |
| **LocalLaundryService: createSVGWrapper(LocalLaundryService, "Local Laundry Service")** | `any` | No | - | - |
| **LocalLibrary: createSVGWrapper(LocalLibrary, "Local Library")** | `any` | No | - | - |
| **LocalMall: createSVGWrapper(LocalMall, "Local Mall")** | `any` | No | - | - |
| **LocalMovies: createSVGWrapper(LocalMovies, "Local Movies")** | `any` | No | - | - |
| **LocalOffer: createSVGWrapper(LocalOffer, "Local Offer")** | `any` | No | - | - |
| **LocalParking: createSVGWrapper(LocalParking, "Local Parking")** | `any` | No | - | - |
| **LocalPharmacy: createSVGWrapper(LocalPharmacy, "Local Pharmacy")** | `any` | No | - | - |
| **LocalPhone: createSVGWrapper(LocalPhone, "Local Phone")** | `any` | No | - | - |
| **LocalPizza: createSVGWrapper(LocalPizza, "Local Pizza")** | `any` | No | - | - |
| **LocalPlay: createSVGWrapper(LocalPlay, "Local Play")** | `any` | No | - | - |
| **LocalPolice: createSVGWrapper(LocalPolice, "Local Police")** | `any` | No | - | - |
| **LocalPostOffice: createSVGWrapper(LocalPostOffice, "Local Post Office")** | `any` | No | - | - |
| **LocalPrintshop: createSVGWrapper(LocalPrintshop, "Local Printshop")** | `any` | No | - | - |
| **LocalSee: createSVGWrapper(LocalSee, "Local See")** | `any` | No | - | - |
| **LocalShipping: createSVGWrapper(LocalShipping, "Local Shipping")** | `any` | No | - | - |
| **LocalTaxi: createSVGWrapper(LocalTaxi, "Local Taxi")** | `any` | No | - | - |
| **LocationCity: createSVGWrapper(LocationCity, "Location City")** | `any` | No | - | - |
| **LocationOff: createSVGWrapper(LocationOff, "Location Off")** | `any` | No | - | - |
| **LocationOn: createSVGWrapper(LocationOn, "Location On")** | `any` | No | - | - |
| **LocationPin: createSVGWrapper(LocationPin, "Location Pin")** | `any` | No | - | - |
| **Lock: createSVGWrapper(Lock, "Lock")** | `any` | No | - | - |
| **LockClock: createSVGWrapper(LockClock, "Lock Clock")** | `any` | No | - | - |
| **LockOpen: createSVGWrapper(LockOpen, "Lock Open")** | `any` | No | - | - |
| **LockOutline: createSVGWrapper(LockOutline, "Lock Outline")** | `any` | No | - | - |
| **Login: createSVGWrapper(Login, "Login")** | `any` | No | - | - |
| **Logout: createSVGWrapper(Logout, "Logout")** | `any` | No | - | - |
| **Loyalty: createSVGWrapper(Loyalty, "Loyalty")** | `any` | No | - | - |
| **Luggage: createSVGWrapper(Luggage, "Luggage")** | `any` | No | - | - |
| **LunchDining: createSVGWrapper(LunchDining, "Lunch Dining")** | `any` | No | - | - |
| **MailOutline: createSVGWrapper(MailOutline, "Mail Outline")** | `any` | No | - | - |
| **Map: createSVGWrapper(Map, "Map")** | `any` | No | - | - |
| **MapsUgc: createSVGWrapper(MapsUgc, "Maps User Generated Content")** | `any` | No | - | - |
| **MarkAsUnread: createSVGWrapper(MarkAsUnread, "Mark As Unread")** | `any` | No | - | - |
| **MarkChatRead: createSVGWrapper(MarkChatRead, "Mark Chat Read")** | `any` | No | - | - |
| **MarkChatUnread: createSVGWrapper(MarkChatUnread, "Mark Chat Unread")** | `any` | No | - | - |
| **MarkEmailRead: createSVGWrapper(MarkEmailRead, "Mark Email Read")** | `any` | No | - | - |
| **MarkEmailUnread: createSVGWrapper(MarkEmailUnread, "Mark Email Unread")** | `any` | No | - | - |
| **MarkunreadMailbox: createSVGWrapper(MarkunreadMailbox, "Mark Unread Mailbox")** | `any` | No | - | - |
| **Masks: createSVGWrapper(Masks, "Masks")** | `any` | No | - | - |
| **Maximize: createSVGWrapper(Maximize, "Maximize")** | `any` | No | - | - |
| **Mediation: createSVGWrapper(Mediation, "Mediation")** | `any` | No | - | - |
| **MedicalServices: createSVGWrapper(MedicalServices, "Medical Services")** | `any` | No | - | - |
| **Menu: createSVGWrapper(Menu, "Menu")** | `any` | No | - | - |
| **MenuBook: createSVGWrapper(MenuBook, "Menu Book")** | `any` | No | - | - |
| **MenuOpen: createSVGWrapper(MenuOpen, "Menu Open")** | `any` | No | - | - |
| **Message: createSVGWrapper(Message, "Message")** | `any` | No | - | - |
| **MilitaryTech: createSVGWrapper(MilitaryTech, "Military Tech")** | `any` | No | - | - |
| **Minimize: createSVGWrapper(Minimize, "Minimize")** | `any` | No | - | - |
| **MiscellaneousServices: createSVGWrapper(MiscellaneousServices, "Miscellaneous Services")** | `any` | No | - | - |
| **MobileScreenShare: createSVGWrapper(MobileScreenShare, "Mobile Screen Share")** | `any` | No | - | - |
| **ModelTraining: createSVGWrapper(ModelTraining, "Model Training")** | `any` | No | - | - |
| **Money: createSVGWrapper(Money, "Money")** | `any` | No | - | - |
| **Mood: createSVGWrapper(Mood, "Mood")** | `any` | No | - | - |
| **MoodBad: createSVGWrapper(MoodBad, "Mood Bad")** | `any` | No | - | - |
| **Moped: createSVGWrapper(Moped, "Moped")** | `any` | No | - | - |
| **MoreHoriz: createSVGWrapper(MoreHoriz, "More Horizontal")** | `any` | No | - | - |
| **MoreTime: createSVGWrapper(MoreTime, "More Time")** | `any` | No | - | - |
| **MoreVert: createSVGWrapper(MoreVert, "More Vertical")** | `any` | No | - | - |
| **MultipleStop: createSVGWrapper(MultipleStop, "Multiple Stop")** | `any` | No | - | - |
| **Museum: createSVGWrapper(Museum, "Museum")** | `any` | No | - | - |
| **MyLocation: createSVGWrapper(MyLocation, "My Location")** | `any` | No | - | - |
| **Nat: createSVGWrapper(Nat, "Nat")** | `any` | No | - | - |
| **Navigation: createSVGWrapper(Navigation, "Navigation")** | `any` | No | - | - |
| **NearMe: createSVGWrapper(NearMe, "Near Me")** | `any` | No | - | - |
| **NearMeDisabled: createSVGWrapper(NearMeDisabled, "Near Me Disabled")** | `any` | No | - | - |
| **NextPlan: createSVGWrapper(NextPlan, "Next Plan")** | `any` | No | - | - |
| **Nightlife: createSVGWrapper(Nightlife, "Nightlife")** | `any` | No | - | - |
| **NightlightRound: createSVGWrapper(NightlightRound, "Nightlight Round")** | `any` | No | - | - |
| **NightsStay: createSVGWrapper(NightsStay, "Nights Stay")** | `any` | No | - | - |
| **NoLuggage: createSVGWrapper(NoLuggage, "No Luggage")** | `any` | No | - | - |
| **NoMeals: createSVGWrapper(NoMeals, "No Meals")** | `any` | No | - | - |
| **NoMealsOuline: createSVGWrapper(NoMealsOuline, "No Meals Outline")** | `any` | No | - | - |
| **NoResultsFoundIcon: createSVGWrapper(NoResultsFoundIcon, "No results found")** | `any` | No | - | - |
| **North: createSVGWrapper(North, "North")** | `any` | No | - | - |
| **NorthEast: createSVGWrapper(NorthEast, "North East")** | `any` | No | - | - |
| **NorthWest: createSVGWrapper(NorthWest, "North West")** | `any` | No | - | - |
| **NoSim: createSVGWrapper(NoSim, "No Sim")** | `any` | No | - | - |
| **NotAccessible: createSVGWrapper(NotAccessible, "Not Accessible")** | `any` | No | - | - |
| **NoteAdd: createSVGWrapper(NoteAdd, "Note Add")** | `any` | No | - | - |
| **NotificationImportant: createSVGWrapper(NotificationImportant, "Notification Important")** | `any` | No | - | - |
| **Notifications: createSVGWrapper(Notifications, "Notifications")** | `any` | No | - | - |
| **NotificationsActive: createSVGWrapper(NotificationsActive, "Notifications Active")** | `any` | No | - | - |
| **NotificationsNone: createSVGWrapper(NotificationsNone, "Notifications None")** | `any` | No | - | - |
| **NotificationsOff: createSVGWrapper(NotificationsOff, "Notifications Off")** | `any` | No | - | - |
| **NotificationsPaused: createSVGWrapper(NotificationsPaused, "Notifications Paused")** | `any` | No | - | - |
| **NotListedLocation: createSVGWrapper(NotListedLocation, "Not Listed Location")** | `any` | No | - | - |
| **NoTransfer: createSVGWrapper(NoTransfer, "No Transfer")** | `any` | No | - | - |
| **NotStarted: createSVGWrapper(NotStarted, "Not Started")** | `any` | No | - | - |
| **OfflineBolt: createSVGWrapper(OfflineBolt, "Offline Bolt")** | `any` | No | - | - |
| **OfflinePin: createSVGWrapper(OfflinePin, "Offline Pin")** | `any` | No | - | - |
| **OfflineShare: createSVGWrapper(OfflineShare, "Offline Share")** | `any` | No | - | - |
| **onClick** | `func` | No | - | Click Event handler when icon is clicked |
| **OnlinePrediction: createSVGWrapper(OnlinePrediction, "Online Prediction")** | `any` | No | - | - |
| **Opacity: createSVGWrapper(Opacity, "Opacity")** | `any` | No | - | - |
| **OpenInBrowser: createSVGWrapper(OpenInBrowser, "Open In Browser")** | `any` | No | - | - |
| **OpenInFull: createSVGWrapper(OpenInFull, "Open In Full")** | `any` | No | - | - |
| **OpenInNew: createSVGWrapper(OpenInNew, "Open In New")** | `any` | No | - | - |
| **OpenWith: createSVGWrapper(OpenWith, "Open With")** | `any` | No | - | - |
| **Outbond: createSVGWrapper(Outbond, "Outbound")** | `any` | No | - | - |
| **Outbox: createSVGWrapper(Outbox, "Outbox")** | `any` | No | - | - |
| **OutdoorGrill: createSVGWrapper(OutdoorGrill, "Outdoor Grill")** | `any` | No | - | - |
| **OutgoingMail: createSVGWrapper(OutgoingMail, "Outgoing Mail")** | `any` | No | - | - |
| **Outlet: createSVGWrapper(Outlet, "Outlet")** | `any` | No | - | - |
| **Pages: createSVGWrapper(Pages, "Pages")** | `any` | No | - | - |
| **Pageview: createSVGWrapper(Pageview, "Pageview")** | `any` | No | - | - |
| **PanTool: createSVGWrapper(PanTool, "Pan Tool")** | `any` | No | - | - |
| **Park: createSVGWrapper(Park, "Park")** | `any` | No | - | - |
| **PartyMode: createSVGWrapper(PartyMode, "Party Mode")** | `any` | No | - | - |
| **PausePresentation: createSVGWrapper(PausePresentation, "Pause Presentation")** | `any` | No | - | - |
| **Payment: createSVGWrapper(Payment, "Payment")** | `any` | No | - | - |
| **Payments: createSVGWrapper(Payments, "Payments")** | `any` | No | - | - |
| **PedalBike: createSVGWrapper(PedalBike, "Pedal Bike")** | `any` | No | - | - |
| **Pending: createSVGWrapper(Pending, "Pending")** | `any` | No | - | - |
| **PendingActions: createSVGWrapper(PendingActions, "Pending Actions")** | `any` | No | - | - |
| **People: createSVGWrapper(People, "People")** | `any` | No | - | - |
| **PeopleAlt: createSVGWrapper(PeopleAlt, "People Alternate")** | `any` | No | - | - |
| **PeopleOutline: createSVGWrapper(PeopleOutline, "People Outline")** | `any` | No | - | - |
| **PermCameraMic: createSVGWrapper(PermCameraMic, "Permission Camera Mic")** | `any` | No | - | - |
| **PermContactCalendar: createSVGWrapper(PermContactCalendar, "Permission Contact Calendar")** | `any` | No | - | - |
| **PermDataSetting: createSVGWrapper(PermDataSetting, "Permission Data Setting")** | `any` | No | - | - |
| **PermDeviceInformation: createSVGWrapper(PermDeviceInformation, "Permission Device Information")** | `any` | No | - | - |
| **PermIdentity: createSVGWrapper(PermIdentity, "Permission Identity")** | `any` | No | - | - |
| **PermMedia: createSVGWrapper(PermMedia, "Permission Media")** | `any` | No | - | - |
| **PermPhoneMsg: createSVGWrapper(PermPhoneMsg, "Permission Phone Message")** | `any` | No | - | - |
| **PermScanWifi: createSVGWrapper(PermScanWifi, "Permission Scan Wifi")** | `any` | No | - | - |
| **Person: createSVGWrapper(Person, "Person")** | `any` | No | - | - |
| **PersonAdd: createSVGWrapper(PersonAdd, "Person Add")** | `any` | No | - | - |
| **PersonAddAlt: createSVGWrapper(PersonAddAlt, "Person Add Alternate")** | `any` | No | - | - |
| **PersonAddDisabled: createSVGWrapper(PersonAddDisabled, "Person Add Disabled")** | `any` | No | - | - |
| **PersonAddSecondary: createSVGWrapper(PersonAddSecondary, "Person Add Secondary")** | `any` | No | - | - |
| **PersonOutline: createSVGWrapper(PersonOutline, "Person Outline")** | `any` | No | - | - |
| **PersonPin: createSVGWrapper(PersonPin, "Person Pin")** | `any` | No | - | - |
| **PersonPinCircle: createSVGWrapper(PersonPinCircle, "Person Pin Circle")** | `any` | No | - | - |
| **PersonRemove: createSVGWrapper(PersonRemove, "Person Remove")** | `any` | No | - | - |
| **PersonRemoveAlt: createSVGWrapper(PersonRemoveAlt, "Person Remove Alternate")** | `any` | No | - | - |
| **PersonSearch: createSVGWrapper(PersonSearch, "Person Search")** | `any` | No | - | - |
| **PestControl: createSVGWrapper(PestControl, "Pest Control")** | `any` | No | - | - |
| **PestControlRodent: createSVGWrapper(PestControlRodent, "Pest Control Rodent")** | `any` | No | - | - |
| **Pets: createSVGWrapper(Pets, "Pets")** | `any` | No | - | - |
| **Phone: createSVGWrapper(Phone, "Phone")** | `any` | No | - | - |
| **PhoneDisabled: createSVGWrapper(PhoneDisabled, "Phone Disabled")** | `any` | No | - | - |
| **PhoneEnabled: createSVGWrapper(PhoneEnabled, "Phone Enabled")** | `any` | No | - | - |
| **PhonelinkErase: createSVGWrapper(PhonelinkErase, "Phonelink Erase")** | `any` | No | - | - |
| **PhonelinkLock: createSVGWrapper(PhonelinkLock, "Phonelink Lock")** | `any` | No | - | - |
| **PhonelinkRing: createSVGWrapper(PhonelinkRing, "Phonelink Ring")** | `any` | No | - | - |
| **PhonelinkSetup: createSVGWrapper(PhonelinkSetup, "Phonelink Setup")** | `any` | No | - | - |
| **PictureInPicture: createSVGWrapper(PictureInPicture, "Picture In Picture")** | `any` | No | - | - |
| **PictureInPictureAlt: createSVGWrapper(PictureInPictureAlt, "Picture In Picture Alternate")** | `any` | No | - | - |
| **PinDrop: createSVGWrapper(PinDrop, "Pin Drop")** | `any` | No | - | - |
| **PivotTableChart: createSVGWrapper(PivotTableChart, "Pivot Table Chart")** | `any` | No | - | - |
| **Place: createSVGWrapper(Place, "Place")** | `any` | No | - | - |
| **Plagiarism: createSVGWrapper(Plagiarism, "Plagiarism")** | `any` | No | - | - |
| **PlayForWork: createSVGWrapper(PlayForWork, "Play For Work")** | `any` | No | - | - |
| **Plumbing: createSVGWrapper(Plumbing, "Plumbing")** | `any` | No | - | - |
| **PlusOne: createSVGWrapper(PlusOne, "Plus One")** | `any` | No | - | - |
| **Poll: createSVGWrapper(Poll, "Poll")** | `any` | No | - | - |
| **Polymer: createSVGWrapper(Polymer, "Polymer")** | `any` | No | - | - |
| **Population: createSVGWrapper(Population, "Population")** | `any` | No | - | - |
| **PortableWifiOff: createSVGWrapper(PortableWifiOff, "Portable Wifi Off")** | `any` | No | - | - |
| **PowerSettingsNew: createSVGWrapper(PowerSettingsNew, "Power Settings New")** | `any` | No | - | - |
| **PregnantWoman: createSVGWrapper(PregnantWoman, "Pregnant Woman")** | `any` | No | - | - |
| **PresentToAll: createSVGWrapper(PresentToAll, "Present To All")** | `any` | No | - | - |
| **Preview: createSVGWrapper(Preview, "Preview")** | `any` | No | - | - |
| **Print: createSVGWrapper(Print, "Print")** | `any` | No | - | - |
| **PrintDisabled: createSVGWrapper(PrintDisabled, "Print Disabled")** | `any` | No | - | - |
| **PrivacyTip: createSVGWrapper(PrivacyTip, "Privacy Tip")** | `any` | No | - | - |
| **Psychology: createSVGWrapper(Psychology, "Psychology")** | `any` | No | - | - |
| **Public: createSVGWrapper(Public, "Public")** | `any` | No | - | - |
| **PublicOff: createSVGWrapper(PublicOff, "Public Off")** | `any` | No | - | - |
| **PublishedWithChanges: createSVGWrapper(PublishedWithChanges, "Published With Changes")** | `any` | No | - | - |
| **QrCode: createSVGWrapper(QrCode, "QR Code")** | `any` | No | - | - |
| **QrCodeScanner: createSVGWrapper(QrCodeScanner, "QR Code Scanner")** | `any` | No | - | - |
| **QueryBuilder: createSVGWrapper(QueryBuilder, "Query Builder")** | `any` | No | - | - |
| **QuestionAnswer: createSVGWrapper(QuestionAnswer, "Question Answer")** | `any` | No | - | - |
| **Quickreply: createSVGWrapper(Quickreply, "Quick Reply")** | `any` | No | - | - |
| **RailwayAlert: createSVGWrapper(RailwayAlert, "Railway Alert")** | `any` | No | - | - |
| **RamenDining: createSVGWrapper(RamenDining, "Ramen Dining")** | `any` | No | - | - |
| **RateReview: createSVGWrapper(RateReview, "Rate Review")** | `any` | No | - | - |
| **ReadMore: createSVGWrapper(ReadMore, "Read More")** | `any` | No | - | - |
| **Receipt: createSVGWrapper(Receipt, "Receipt")** | `any` | No | - | - |
| **Recommend: createSVGWrapper(Recommend, "Recommend")** | `any` | No | - | - |
| **RecordVoiceOver: createSVGWrapper(RecordVoiceOver, "Record Voice Over")** | `any` | No | - | - |
| **Redeem: createSVGWrapper(Redeem, "Redeem")** | `any` | No | - | - |
| **ReduceCapacity: createSVGWrapper(ReduceCapacity, "Reduce Capacity")** | `any` | No | - | - |
| **Refresh: createSVGWrapper(Refresh, "Refresh")** | `any` | No | - | - |
| **RemoveDone: createSVGWrapper(RemoveDone, "Remove Done")** | `any` | No | - | - |
| **RemoveModerator: createSVGWrapper(RemoveModerator, "Remove Moderator")** | `any` | No | - | - |
| **RemoveShoppingCart: createSVGWrapper(RemoveShoppingCart, "Remove Shopping Cart")** | `any` | No | - | - |
| **Reorder: createSVGWrapper(Reorder, "Reorder")** | `any` | No | - | - |
| **ReportProblem: createSVGWrapper(ReportProblem, "Report Problem")** | `any` | No | - | - |
| **RequestPage: createSVGWrapper(RequestPage, "Request Page")** | `any` | No | - | - |
| **RequestQuote: createSVGWrapper(RequestQuote, "Request Quote")** | `any` | No | - | - |
| **Restaurant: createSVGWrapper(Restaurant, "Restaurant")** | `any` | No | - | - |
| **RestaurantMenu: createSVGWrapper(RestaurantMenu, "Restaurant Menu")** | `any` | No | - | - |
| **Restore: createSVGWrapper(Restore, "Restore")** | `any` | No | - | - |
| **RestoreFromTrash: createSVGWrapper(RestoreFromTrash, "Restore From Trash")** | `any` | No | - | - |
| **RestorePage: createSVGWrapper(RestorePage, "Restore Page")** | `any` | No | - | - |
| **RingVolume: createSVGWrapper(RingVolume, "Ring Volume")** | `any` | No | - | - |
| **Room: createSVGWrapper(Room, "Room")** | `any` | No | - | - |
| **Rotate360: createSVGWrapper(Rotate360, "Rotate 360")** | `any` | No | - | - |
| **Rotation3D: createSVGWrapper(Rotation3D, "3D Rotation")** | `any` | No | - | - |
| **RoundedCorner: createSVGWrapper(RoundedCorner, "Rounded Corner")** | `any` | No | - | - |
| **Rowing: createSVGWrapper(Rowing, "Rowing")** | `any` | No | - | - |
| **RssFeed: createSVGWrapper(RssFeed, "RSS Feed")** | `any` | No | - | - |
| **Rtt: createSVGWrapper(Rtt, "RTT")** | `any` | No | - | - |
| **Rule: createSVGWrapper(Rule, "Rule")** | `any` | No | - | - |
| **RuleFolder: createSVGWrapper(RuleFolder, "Rule Folder")** | `any` | No | - | - |
| **RunCircle: createSVGWrapper(RunCircle, "Run Circle")** | `any` | No | - | - |
| **Sanitizer: createSVGWrapper(Sanitizer, "Sanitizer")** | `any` | No | - | - |
| **Satellite: createSVGWrapper(Satellite, "Satellite")** | `any` | No | - | - |
| **SavedSearch: createSVGWrapper(SavedSearch, "Saved Search")** | `any` | No | - | - |
| **Schedule: createSVGWrapper(Schedule, "Schedule")** | `any` | No | - | - |
| **ScheduleSend: createSVGWrapper(ScheduleSend, "Schedule Send")** | `any` | No | - | - |
| **School: createSVGWrapper(School, "School")** | `any` | No | - | - |
| **Science: createSVGWrapper(Science, "Science")** | `any` | No | - | - |
| **ScreenShare: createSVGWrapper(ScreenShare, "Screen Share")** | `any` | No | - | - |
| **ScreenShareStop: createSVGWrapper(ScreenShareStop, "Stop Screen Share")** | `any` | No | - | - |
| **Search: createSVGWrapper(Search, "Search")** | `any` | No | - | - |
| **SearchOff: createSVGWrapper(SearchOff, "Search Off")** | `any` | No | - | - |
| **Segment: createSVGWrapper(Segment, "Segment")** | `any` | No | - | - |
| **SelfImprovement: createSVGWrapper(SelfImprovement, "Self Improvement")** | `any` | No | - | - |
| **SendAndArchive: createSVGWrapper(SendAndArchive, "Send And Archive")** | `any` | No | - | - |
| **SentimentDissatisfied: createSVGWrapper(SentimentDissatisfied, "Sentiment Dissatisfied")** | `any` | No | - | - |
| **SentimentNeutral: createSVGWrapper(SentimentNeutral, "Sentiment Neutral")** | `any` | No | - | - |
| **SentimentSatisfied: createSVGWrapper(SentimentSatisfied, "Sentiment Satisfied")** | `any` | No | - | - |
| **SentimentSatisfiedAlt: createSVGWrapper(SentimentSatisfiedAlt, "Sentiment Satisfied Alternate")** | `any` | No | - | - |
| **SentimentVeryDissatisfied: createSVGWrapper(SentimentVeryDissatisfied, "Sentiment Very Dissatisfied")** | `any` | No | - | - |
| **SentimentVerySatisfied: createSVGWrapper(SentimentVerySatisfied, "Sentiment Very Satisfied")** | `any` | No | - | - |
| **SetMeal: createSVGWrapper(SetMeal, "Set Meal")** | `any` | No | - | - |
| **Settings: createSVGWrapper(Settings, "Settings")** | `any` | No | - | - |
| **SettingsApplications: createSVGWrapper(SettingsApplications, "Settings Applications")** | `any` | No | - | - |
| **SettingsBackupRestore: createSVGWrapper(SettingsBackupRestore, "Settings Backup Restore")** | `any` | No | - | - |
| **SettingsBluetooth: createSVGWrapper(SettingsBluetooth, "Settings Bluetooth")** | `any` | No | - | - |
| **SettingsBrightness: createSVGWrapper(SettingsBrightness, "Settings Brightness")** | `any` | No | - | - |
| **SettingsCell: createSVGWrapper(SettingsCell, "Settings Cell")** | `any` | No | - | - |
| **SettingsEthernet: createSVGWrapper(SettingsEthernet, "Settings Ethernet")** | `any` | No | - | - |
| **SettingsInputAntenna: createSVGWrapper(SettingsInputAntenna, "Settings Input Antenna")** | `any` | No | - | - |
| **SettingsInputComponent: createSVGWrapper(SettingsInputComponent, "Settings Input Component")** | `any` | No | - | - |
| **SettingsInputComposite: createSVGWrapper(SettingsInputComposite, "Settings Input Composite")** | `any` | No | - | - |
| **SettingsInputHdmi: createSVGWrapper(SettingsInputHdmi, "Settings Input HDMI")** | `any` | No | - | - |
| **SettingsInputVideo: createSVGWrapper(SettingsInputVideo, "Settings Input Video")** | `any` | No | - | - |
| **SettingsOverscan: createSVGWrapper(SettingsOverscan, "Settings Overscan")** | `any` | No | - | - |
| **SettingsPhone: createSVGWrapper(SettingsPhone, "Settings Phone")** | `any` | No | - | - |
| **SettingsPower: createSVGWrapper(SettingsPower, "Settings Power")** | `any` | No | - | - |
| **SettingsRemote: createSVGWrapper(SettingsRemote, "Settings Remote")** | `any` | No | - | - |
| **SettingsVoice: createSVGWrapper(SettingsVoice, "Settings Voice")** | `any` | No | - | - |
| **Share: createSVGWrapper(Share, "Share")** | `any` | No | - | - |
| **Shop: createSVGWrapper(Shop, "Shop")** | `any` | No | - | - |
| **ShopAlt: createSVGWrapper(ShopAlt, "Shop Alternate")** | `any` | No | - | - |
| **ShoppingBag: createSVGWrapper(ShoppingBag, "Shopping Bag")** | `any` | No | - | - |
| **ShoppingBasket: createSVGWrapper(ShoppingBasket, "Shopping Basket")** | `any` | No | - | - |
| **ShoppingCart: createSVGWrapper(ShoppingCart, "Shopping Cart")** | `any` | No | - | - |
| **Sick: createSVGWrapper(Sick, "Sick")** | `any` | No | - | - |
| **SingleBed: createSVGWrapper(SingleBed, "Single Bed")** | `any` | No | - | - |
| **SixFtApart: createSVGWrapper(SixFtApart, "Six Feet Apart")** | `any` | No | - | - |
| **SmartButton: createSVGWrapper(SmartButton, "Smart Button")** | `any` | No | - | - |
| **SMSText: createSVGWrapper(SMSText, "SMS Text")** | `any` | No | - | - |
| **SnippetFolder: createSVGWrapper(SnippetFolder, "Snippet Folder")** | `any` | No | - | - |
| **Source: createSVGWrapper(Source, "Source")** | `any` | No | - | - |
| **South: createSVGWrapper(South, "South")** | `any` | No | - | - |
| **SouthEast: createSVGWrapper(SouthEast, "South East")** | `any` | No | - | - |
| **SouthWest: createSVGWrapper(SouthWest, "South West")** | `any` | No | - | - |
| **SpeakerNotes: createSVGWrapper(SpeakerNotes, "Speaker Notes")** | `any` | No | - | - |
| **SpeakerNotesOff: createSVGWrapper(SpeakerNotesOff, "Speaker Notes Off")** | `any` | No | - | - |
| **SpeakerPhone: createSVGWrapper(SpeakerPhone, "Speaker Phone")** | `any` | No | - | - |
| **SpellCheck: createSVGWrapper(SpellCheck, "Spell Check")** | `any` | No | - | - |
| **Sports: createSVGWrapper(Sports, "Sports")** | `any` | No | - | - |
| **SportsBaseball: createSVGWrapper(SportsBaseball, "Sports Baseball")** | `any` | No | - | - |
| **SportsBasketball: createSVGWrapper(SportsBasketball, "Sports Basketball")** | `any` | No | - | - |
| **SportsCricket: createSVGWrapper(SportsCricket, "Sports Cricket")** | `any` | No | - | - |
| **SportsEsports: createSVGWrapper(SportsEsports, "Sports Esports")** | `any` | No | - | - |
| **SportsFootball: createSVGWrapper(SportsFootball, "Sports Football")** | `any` | No | - | - |
| **SportsGolf: createSVGWrapper(SportsGolf, "Sports Golf")** | `any` | No | - | - |
| **SportsHandball: createSVGWrapper(SportsHandball, "Sports Handball")** | `any` | No | - | - |
| **SportsHockey: createSVGWrapper(SportsHockey, "Sports Hockey")** | `any` | No | - | - |
| **SportsKabaddi: createSVGWrapper(SportsKabaddi, "Sports Kabaddi")** | `any` | No | - | - |
| **SportsMma: createSVGWrapper(SportsMma, "Sports MMA")** | `any` | No | - | - |
| **SportsMotorsports: createSVGWrapper(SportsMotorsports, "Sports Motorsports")** | `any` | No | - | - |
| **SportsRugby: createSVGWrapper(SportsRugby, "Sports Rugby")** | `any` | No | - | - |
| **SportsSoccer: createSVGWrapper(SportsSoccer, "Sports Soccer")** | `any` | No | - | - |
| **SportsTennis: createSVGWrapper(SportsTennis, "Sports Tennis")** | `any` | No | - | - |
| **SportsVolleyball: createSVGWrapper(SportsVolleyball, "Sports Volleyball")** | `any` | No | - | - |
| **StarEmpty: createSVGWrapper(StarEmpty, "Star Empty")** | `any` | No | - | - |
| **StarFilled: createSVGWrapper(StarFilled, "Star Filled")** | `any` | No | - | - |
| **StarRate: createSVGWrapper(StarRate, "Star Rate")** | `any` | No | - | - |
| **Stars: createSVGWrapper(Stars, "Stars")** | `any` | No | - | - |
| **StayCurrentLandscape: createSVGWrapper(StayCurrentLandscape, "Stay Current Landscape")** | `any` | No | - | - |
| **StayCurrentPortrait: createSVGWrapper(StayCurrentPortrait, "Stay Current Portrait")** | `any` | No | - | - |
| **StayPrimaryLandscape: createSVGWrapper(StayPrimaryLandscape, "Stay Primary Landscape")** | `any` | No | - | - |
| **StayPrimaryPortrait: createSVGWrapper(StayPrimaryPortrait, "Stay Primary Portrait")** | `any` | No | - | - |
| **StickyNotesSecondary: createSVGWrapper(StickyNotesSecondary, "Sticky Notes Secondary")** | `any` | No | - | - |
| **Store: createSVGWrapper(Store, "Store")** | `any` | No | - | - |
| **StoreMallDirectory: createSVGWrapper(StoreMallDirectory, "Store Mall Directory")** | `any` | No | - | - |
| **StreetView: createSVGWrapper(StreetView, "Street View")** | `any` | No | - | - |
| **style** | `object` | No | - | custom style of the svg icon |
| **SubdirectoryArrowLeft: createSVGWrapper(SubdirectoryArrowLeft, "Subdirectory Arrow Left")** | `any` | No | - | - |
| **SubdirectoryArrowRight: createSVGWrapper(SubdirectoryArrowRight, "Subdirectory Arrow Right")** | `any` | No | - | - |
| **Subject: createSVGWrapper(Subject, "Subject")** | `any` | No | - | - |
| **SubtitlesOff: createSVGWrapper(SubtitlesOff, "Subtitles Off")** | `any` | No | - | - |
| **Subway: createSVGWrapper(Subway, "Subway")** | `any` | No | - | - |
| **Success: createSVGWrapper(Success, "Success")** | `any` | No | - | - |
| **SupervisedUserCircle: createSVGWrapper(SupervisedUserCircle, "Supervised User Circle")** | `any` | No | - | - |
| **SupervisorAccount: createSVGWrapper(SupervisorAccount, "Supervisor Account")** | `any` | No | - | - |
| **Support: createSVGWrapper(Support, "Support")** | `any` | No | - | - |
| **SwapCalls: createSVGWrapper(SwapCalls, "Swap Calls")** | `any` | No | - | - |
| **SwapHorizontal: createSVGWrapper(SwapHorizontal, "Swap Horizontal")** | `any` | No | - | - |
| **SwapHorizontalCircle: createSVGWrapper(SwapHorizontalCircle, "Swap Horizontal Circle")** | `any` | No | - | - |
| **SwapVertical: createSVGWrapper(SwapVertical, "Swap Vertical")** | `any` | No | - | - |
| **SwapVerticalCircle: createSVGWrapper(SwapVerticalCircle, "Swap Vertical Circle")** | `any` | No | - | - |
| **Swipe: createSVGWrapper(Swipe, "Swipe")** | `any` | No | - | - |
| **SwitchAccount: createSVGWrapper(SwitchAccount, "Switch Account")** | `any` | No | - | - |
| **SwitchLeft: createSVGWrapper(SwitchLeft, "Switch Left")** | `any` | No | - | - |
| **SwitchRight: createSVGWrapper(SwitchRight, "Switch Right")** | `any` | No | - | - |
| **SyncAlt: createSVGWrapper(SyncAlt, "Sync Alternate")** | `any` | No | - | - |
| **SystemUpdateAlt: createSVGWrapper(SystemUpdateAlt, "System Update Alternate")** | `any` | No | - | - |
| **Tab: createSVGWrapper(Tab, "Tab")** | `any` | No | - | - |
| **TableView: createSVGWrapper(TableView, "Table View")** | `any` | No | - | - |
| **TabUnselected: createSVGWrapper(TabUnselected, "Tab Unselected")** | `any` | No | - | - |
| **TakeOutDining: createSVGWrapper(TakeOutDining, "Takeout Dining")** | `any` | No | - | - |
| **TaxiAlert: createSVGWrapper(TaxiAlert, "Taxi Alert")** | `any` | No | - | - |
| **Terrain: createSVGWrapper(Terrain, "Terrain")** | `any` | No | - | - |
| **TextRotateUp: createSVGWrapper(TextRotateUp, "Text Rotate Up")** | `any` | No | - | - |
| **TextRotateVertical: createSVGWrapper(TextRotateVertical, "Text Rotate Vertical")** | `any` | No | - | - |
| **TextRotationAngleDown: createSVGWrapper(TextRotationAngleDown, "Text Rotation Angle Down")** | `any` | No | - | - |
| **TextRotationAngleUp: createSVGWrapper(TextRotationAngleUp, "Text Rotation Angle Up")** | `any` | No | - | - |
| **TextRotationDown: createSVGWrapper(TextRotationDown, "Text Rotation Down")** | `any` | No | - | - |
| **TextRotationNone: createSVGWrapper(TextRotationNone, "Text Rotation None")** | `any` | No | - | - |
| **TextSnippet: createSVGWrapper(TextSnippet, "Text Snippet")** | `any` | No | - | - |
| **TheaterComedy: createSVGWrapper(TheaterComedy, "Theater Comedy")** | `any` | No | - | - |
| **Theaters: createSVGWrapper(Theaters, "Theaters")** | `any` | No | - | - |
| **ThumbDown: createSVGWrapper(ThumbDown, "Thumb Down")** | `any` | No | - | - |
| **ThumbDownAlt: createSVGWrapper(ThumbDownAlt, "Thumb Down Alternate")** | `any` | No | - | - |
| **ThumbDownOffAlt: createSVGWrapper(ThumbDownOffAlt, "Thumb Down Off Alternate")** | `any` | No | - | - |
| **ThumbsUpDown: createSVGWrapper(ThumbsUpDown, "Thumbs Up Down")** | `any` | No | - | - |
| **ThumbUp: createSVGWrapper(ThumbUp, "Thumb Up")** | `any` | No | - | - |
| **ThumbUpAlt: createSVGWrapper(ThumbUpAlt, "Thumb Up Alternate")** | `any` | No | - | - |
| **ThumbUpOffAlt: createSVGWrapper(ThumbUpOffAlt, "Thumb Up Off Alternate")** | `any` | No | - | - |
| **TickMark: createSVGWrapper(TickMark, "Tick Mark")** | `any` | No | - | - |
| **Timeline: createSVGWrapper(Timeline, "Timeline")** | `any` | No | - | - |
| **Toc: createSVGWrapper(Toc, "Table of Contents")** | `any` | No | - | - |
| **Today: createSVGWrapper(Today, "Today")** | `any` | No | - | - |
| **Toll: createSVGWrapper(Toll, "Toll")** | `any` | No | - | - |
| **Topic: createSVGWrapper(Topic, "Topic")** | `any` | No | - | - |
| **Torch: createSVGWrapper(Torch, "Torch")** | `any` | No | - | - |
| **TorchNoun: createSVGWrapper(TorchNoun, "Torch Noun")** | `any` | No | - | - |
| **TouchApp: createSVGWrapper(TouchApp, "Touch App")** | `any` | No | - | - |
| **Tour: createSVGWrapper(Tour, "Tour")** | `any` | No | - | - |
| **TrackChanges: createSVGWrapper(TrackChanges, "Track Changes")** | `any` | No | - | - |
| **Traffic: createSVGWrapper(Traffic, "Traffic")** | `any` | No | - | - |
| **Train: createSVGWrapper(Train, "Train")** | `any` | No | - | - |
| **Tram: createSVGWrapper(Tram, "Tram")** | `any` | No | - | - |
| **TransferWithinStation: createSVGWrapper(TransferWithinStation, "Transfer Within Station")** | `any` | No | - | - |
| **TransitEnterExit: createSVGWrapper(TransitEnterExit, "Transit Enter Exit")** | `any` | No | - | - |
| **Translate: createSVGWrapper(Translate, "Translate")** | `any` | No | - | - |
| **TranslateLanguage: createSVGWrapper(TranslateLanguage, "Translate Language")** | `any` | No | - | - |
| **TrendingDown: createSVGWrapper(TrendingDown, "Trending Down")** | `any` | No | - | - |
| **TrendingFlat: createSVGWrapper(TrendingFlat, "Trending Flat")** | `any` | No | - | - |
| **TrendingUp: createSVGWrapper(TrendingUp, "Trending Up")** | `any` | No | - | - |
| **TripOrigin: createSVGWrapper(TripOrigin, "Trip Origin")** | `any` | No | - | - |
| **TurnedIn: createSVGWrapper(TurnedIn, "Turned In")** | `any` | No | - | - |
| **TurnedInNot: createSVGWrapper(TurnedInNot, "Turned In Not")** | `any` | No | - | - |
| **TwoWheeler: createSVGWrapper(TwoWheeler, "Two Wheeler")** | `any` | No | - | - |
| **UnfoldLess: createSVGWrapper(UnfoldLess, "Unfold Less")** | `any` | No | - | - |
| **UnfoldMore: createSVGWrapper(UnfoldMore, "Unfold More")** | `any` | No | - | - |
| **Unpublished: createSVGWrapper(Unpublished, "Unpublished")** | `any` | No | - | - |
| **Unsubscribe: createSVGWrapper(Unsubscribe, "Unsubscribe")** | `any` | No | - | - |
| **Update: createSVGWrapper(Update, "Update")** | `any` | No | - | - |
| **UpdateExpense: createSVGWrapper(UpdateExpense, "Update Expense")** | `any` | No | - | - |
| **UpdateExpenseSecondary: createSVGWrapper(UpdateExpenseSecondary, "Update Expense Secondary")** | `any` | No | - | - |
| **Upgrade: createSVGWrapper(Upgrade, "Upgrade")** | `any` | No | - | - |
| **UploadFile: createSVGWrapper(UploadFile, "Upload File")** | `any` | No | - | - |
| **Verified: createSVGWrapper(Verified, "Verified")** | `any` | No | - | - |
| **VerifiedUser: createSVGWrapper(VerifiedUser, "Verified User")** | `any` | No | - | - |
| **VerticalSplit: createSVGWrapper(VerticalSplit, "Vertical Split")** | `any` | No | - | - |
| **ViewAgenda: createSVGWrapper(ViewAgenda, "View Agenda")** | `any` | No | - | - |
| **ViewArray: createSVGWrapper(ViewArray, "View Array")** | `any` | No | - | - |
| **ViewCarousel: createSVGWrapper(ViewCarousel, "View Carousel")** | `any` | No | - | - |
| **ViewColumn: createSVGWrapper(ViewColumn, "View Column")** | `any` | No | - | - |
| **ViewDay: createSVGWrapper(ViewDay, "View Day")** | `any` | No | - | - |
| **ViewHeadline: createSVGWrapper(ViewHeadline, "View Headline")** | `any` | No | - | - |
| **ViewInAr: createSVGWrapper(ViewInAr, "View In AR")** | `any` | No | - | - |
| **ViewList: createSVGWrapper(ViewList, "View List")** | `any` | No | - | - |
| **ViewModule: createSVGWrapper(ViewModule, "View Module")** | `any` | No | - | - |
| **ViewQuilt: createSVGWrapper(ViewQuilt, "View Quilt")** | `any` | No | - | - |
| **ViewSidebar: createSVGWrapper(ViewSidebar, "View Sidebar")** | `any` | No | - | - |
| **ViewStream: createSVGWrapper(ViewStream, "View Stream")** | `any` | No | - | - |
| **ViewWeek: createSVGWrapper(ViewWeek, "View Week")** | `any` | No | - | - |
| **Visibility: createSVGWrapper(Visibility, "Visibility")** | `any` | No | - | - |
| **VisibilityOff: createSVGWrapper(VisibilityOff, "Visibility Off")** | `any` | No | - | - |
| **Voicemail: createSVGWrapper(Voicemail, "Voicemail")** | `any` | No | - | - |
| **VoiceOverOff: createSVGWrapper(VoiceOverOff, "Voice Over Off")** | `any` | No | - | - |
| **VolunteerActivism: createSVGWrapper(VolunteerActivism, "Volunteer Activism")** | `any` | No | - | - |
| **VpnKey: createSVGWrapper(VpnKey, "VPN Key")** | `any` | No | - | - |
| **Warning: createSVGWrapper(Warning, "Warning")** | `any` | No | - | - |
| **WatchLater: createSVGWrapper(WatchLater, "Watch Later")** | `any` | No | - | - |
| **WaterfallChart: createSVGWrapper(WaterfallChart, "Waterfall Chart")** | `any` | No | - | - |
| **West: createSVGWrapper(West, "West")** | `any` | No | - | - |
| **Whatsapp: createSVGWrapper(Whatsapp, "Whatsapp")** | `any` | No | - | - |
| **Whatshot: createSVGWrapper(Whatshot, "Whatshot")** | `any` | No | - | - |
| **width** | `string` | No | - | custom width of the svg icon |
| **WifiCalling: createSVGWrapper(WifiCalling, "Wifi Calling")** | `any` | No | - | - |
| **WifiProtectedSetup: createSVGWrapper(WifiProtectedSetup, "Wifi Protected Setup")** | `any` | No | - | - |
| **WineBar: createSVGWrapper(WineBar, "Wine Bar")** | `any` | No | - | - |
| **Work: createSVGWrapper(Work, "Work")** | `any` | No | - | - |
| **WorkOff: createSVGWrapper(WorkOff, "Work Off")** | `any` | No | - | - |
| **WorkOutline: createSVGWrapper(WorkOutline, "Work Outline")** | `any` | No | - | - |
| **WorkspacesFilled: createSVGWrapper(WorkspacesFilled, "Workspaces Filled")** | `any` | No | - | - |
| **WorkspacesOutline: createSVGWrapper(WorkspacesOutline, "Workspaces Outline")** | `any` | No | - | - |
| **WrongLocation: createSVGWrapper(WrongLocation, "Wrong Location")** | `any` | No | - | - |
| **Wysiwyg: createSVGWrapper(Wysiwyg, "What You See Is What You Get")** | `any` | No | - | - |
| **YoutubeSearchedFor: createSVGWrapper(YoutubeSearchedFor, "Youtube Searched For")** | `any` | No | - | - |
| **ZoomIn: createSVGWrapper(ZoomIn, "Zoom In")** | `any` | No | - | - |
| **ZoomOut: createSVGWrapper(ZoomOut, "Zoom Out")** | `any` | No | - | - |
| **ZoomOutMap: createSVGWrapper(ZoomOutMap, "Zoom Out Map")** | `any` | No | - | - |

**Usage Example:**
```jsx
import { SVG } from "@egovernments/digit-ui-components";

<SVG
  onClick={(e) => console.log('clicked')}
/>
```

---

### Switch

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Switch.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Switch.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **className** | `string` | No | - | - |
| **disable** | `bool` | No | `false` | - |
| **isCheckedInitially** | `bool` | No | `false` | - |
| **isLabelFirst** | `bool` | No | `false` | - |
| **label** | `string` | No | `""` | - |
| **onToggle** | `func` | No | `() => {}` | - |
| **shapeOnOff** | `bool` | No | `false` | - |
| **style** | `object` | No | - | - |
| **switchStyle** | `object` | No | `{` | - |

**Usage Example:**
```jsx
import { Switch } from "@egovernments/digit-ui-components";

<Switch
  label="Switch"
/>
```

---

### Tab

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Tab.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Tab.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **activeLink** | `string` | No | - | - |
| **children** | `any` | No | - | - |
| **className** | `string` | No | `""` | - |
| **code** | `string` | No | - | - |
| **configDisplayKey** | `any` | No | - | - |
| **configItemKey** | `string` | No | - | - |
| **configNavItems** | `any` | No | - | - |
| **icon** | `string` | No | - | - |
| **items** | `arrayOf(` | No | - | - |
| **itemStyle** | `object` | No | `{}` | - |
| **name** | `string` | No | - | - |
| **navClassName** | `string` | No | `""` | - |
| **navStyles** | `object` | No | `{}` | - |
| **onTabClick** | `any` | No | - | - |
| **setActiveLink** | `any` | No | - | - |
| **showNav** | `bool` | No | `false` | - |
| **style** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { Tab } from "@egovernments/digit-ui-components";

<Tab
  name="tab"
/>
```

---

### TableBody

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TableBody.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TableBody.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | `[]` | - |
| **className** | `string` | No | `""` | - |
| **style** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { TableBody } from "@egovernments/digit-ui-components";

<TableBody
  className="className"
  style={{}}
  children=""
>
  {/* Children elements go here */}
</TableBody>
```

---

### TableCell

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TableCell.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TableCell.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **accessor** | `string` | No | - | - |
| **cellData** | `any` | No | - | - |
| **cellIndex** | `number` | No | - | - |
| **cellref** | `oneOfType([` | No | - | - |
| **children** | `node` | No | `[]` | - |
| **className** | `string` | No | `""` | - |
| **colSpan** | `number` | No | - | - |
| **columnType** | `string` | No | - | - |
| **isFooter** | `bool` | No | - | - |
| **isHeader** | `bool` | No | - | - |
| **rowIndex** | `number` | No | - | - |
| **style** | `object` | No | `{}` | - |
| **tableData** | `array` | No | - | - |
| **updateTableData** | `func` | No | - | - |

**Usage Example:**
```jsx
import { TableCell } from "@egovernments/digit-ui-components";

<TableCell
  className="className"
  style={{}}
  children=""
>
  {/* Children elements go here */}
</TableCell>
```

---

### TableFooter

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TableFooter.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TableFooter.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | `[]` | - |
| **className** | `string` | No | `""` | - |
| **style** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { TableFooter } from "@egovernments/digit-ui-components";

<TableFooter
  className="className"
  style={{}}
  children=""
>
  {/* Children elements go here */}
</TableFooter>
```

---

### TableHeader

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TableHeader.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TableHeader.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | `[]` | - |
| **className** | `string` | No | `""` | - |
| **style** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { TableHeader } from "@egovernments/digit-ui-components";

<TableHeader
  className="className"
  style={{}}
  children=""
>
  {/* Children elements go here */}
</TableHeader>
```

---

### TableMain

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TableMain.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TableMain.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | `[]` | - |
| **className** | `string` | No | `""` | - |
| **style** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { TableMain } from "@egovernments/digit-ui-components";

<TableMain
  className="className"
  style={{}}
  children=""
>
  {/* Children elements go here */}
</TableMain>
```

---

### TableRow

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TableRow.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TableRow.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | `[]` | - |
| **className** | `string` | No | `""` | - |
| **onClick** | `any` | No | - | - |
| **style** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { TableRow } from "@egovernments/digit-ui-components";

<TableRow
  onClick={(e) => {}}
/>
```

---

### Tag

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Tag.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Tag.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **label** | `string` | ✅ Yes | - | - |
| **alignment** | `any` | No | `"center"` | - |
| **animationStyles** | `any` | No | - | - |
| **className** | `string` | No | `""` | - |
| **icon** | `any` | No | - | - |
| **iconClassName** | `string` | No | `""` | - |
| **iconColor** | `string` | No | `""` | - |
| **labelStyle** | `any` | No | `{}` | - |
| **loader** | `bool` | No | `false` | - |
| **onClick** | `any` | No | - | - |
| **showIcon** | `any` | No | `true` | - |
| **stroke** | `bool` | No | `false` | - |
| **style** | `object` | No | `{}` | - |
| **type** | `string` | No | `"monochrome"` | - |

**Usage Example:**
```jsx
import { Tag } from "@egovernments/digit-ui-components";

<Tag
  label="Tag"
  type="monochrome"
  onClick={(e) => {}}
/>
```

---

### Telephone

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Telephone.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Telephone.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { Telephone } from "@egovernments/digit-ui-components";

<Telephone />
```

---

### TextArea

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TextArea.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TextArea.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **name** | `string` | ✅ Yes | - | - |
| **autoComplete** | `string` | No | - | - |
| **charCount** | `bool` | No | - | - |
| **className** | `string` | No | - | - |
| **disabled** | `bool` | No | - | - |
| **error** | `string` | No | - | - |
| **errors** | `object` | No | - | - |
| **hintText** | `string` | No | - | - |
| **id** | `string` | No | - | - |
| **inputRef** | `oneOfType([func` | No | `undefined` | - |
| **maxlength** | `number` | No | - | - |
| **minlength** | `number` | No | - | - |
| **nonEditable** | `bool` | No | - | - |
| **onChange** | `func` | No | `undefined` | - |
| **pattern** | `string` | No | - | - |
| **placeholder** | `string` | No | - | - |
| **resizeSmart** | `bool` | No | `false` | - |
| **style** | `object` | No | - | - |
| **validation** | `object` | No | - | - |
| **ValidationRequired** | `bool` | No | - | - |
| **value** | `string` | No | - | - |

**Usage Example:**
```jsx
import { TextArea } from "@egovernments/digit-ui-components";

<TextArea
  placeholder="Enter textarea..."
  name="textarea"
  value="value"
  onChange={(value) => console.log(value)}
  disabled={false}
/>
```

---

### TextBlock

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TextBlock.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TextBlock.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **body** | `string` | No | `""` | - |
| **bodyClassName** | `string` | No | `""` | - |
| **caption** | `string` | No | `""` | - |
| **captionClassName** | `string` | No | `""` | - |
| **header** | `string` | No | `""` | - |
| **headerClassName** | `string` | No | `""` | - |
| **headerContentClassName** | `string` | No | `""` | - |
| **style** | `any` | No | `{` | - |
| **subHeader** | `string` | No | `""` | - |
| **subHeaderClassName** | `string` | No | `""` | - |
| **wrapperClassName** | `string` | No | `""` | - |

**Usage Example:**
```jsx
import { TextBlock } from "@egovernments/digit-ui-components";

<TextBlock
  wrapperClassName="wrapperClassName"
  headerContentClassName="headerContentClassName"
  caption="caption"
/>
```

---

### TextInput

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TextInput.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TextInput.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **name** | `string` | ✅ Yes | - | - |
| **allowNegativeValues** | `bool` | No | - | - |
| **autoFocus** | `bool` | No | - | - |
| **className** | `string` | No | - | - |
| **config** | `object` | No | - | - |
| **customClass** | `string` | No | - | - |
| **defaultValue** | `any` | No | - | - |
| **disabled** | `bool` | No | - | - |
| **error** | `string` | No | - | - |
| **errors** | `object` | No | - | - |
| **errorStyle** | `bool` | No | - | - |
| **inputRef** | `oneOfType([` | No | - | - |
| **max** | `number` | No | - | - |
| **maxlength** | `number` | No | - | - |
| **min** | `number` | No | - | - |
| **minlength** | `number` | No | - | - |
| **nonEditable** | `bool` | No | - | - |
| **onBlur** | `func` | No | - | - |
| **onChange** | `func` | No | - | - |
| **onFocus** | `func` | No | - | - |
| **onIconSelection** | `func` | No | - | - |
| **onKeyPress** | `func` | No | - | - |
| **pattern** | `string` | No | - | - |
| **placeholder** | `string` | No | - | - |
| **required** | `bool` | No | `false` | - |
| **signature** | `bool` | No | - | - |
| **signatureImg** | `node` | No | - | - |
| **step** | `string` | No | - | - |
| **style** | `object` | No | - | - |
| **textInputStyle** | `object` | No | - | - |
| **title** | `string` | No | - | - |
| **type** | `string` | No | `"textarea"` | - |
| **value** | `any` | No | - | - |
| **watch** | `func` | No | - | - |

**Usage Example:**
```jsx
import { TextInput } from "@egovernments/digit-ui-components";

<TextInput
  name="textinput"
  placeholder="Enter textinput..."
  onChange={(value) => console.log(value)}
  value=""
  disabled={false}
  type="textarea"
/>
```

---

### Timeline

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Timeline.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Timeline.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **additionalElements** | `any` | No | - | - |
| **className** | `any` | No | - | - |
| **hideDetailsLabel** | `any` | No | - | - |
| **individualElementStyles** | `any` | No | - | - |
| **initialVisibleAdditionalElementsCount** | `any` | No | `0` | - |
| **inline** | `any` | No | - | - |
| **isError** | `any` | No | - | - |
| **isLastStep** | `any` | No | - | - |
| **isNextActiveStep** | `any` | No | - | - |
| **label** | `any` | No | `"Completed"` | - |
| **showConnector** | `any` | No | - | - |
| **showDefaultValueForDate** | `any` | No | - | - |
| **subElements** | `any` | No | - | - |
| **variant** | `any` | No | `"completed"` | - |
| **viewDetailsLabel** | `any` | No | - | - |

**Usage Example:**
```jsx
import { Timeline } from "@egovernments/digit-ui-components";

<Timeline
  label="Completed"
  variant="completed"
/>
```

---

### Toast

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Toast.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Toast.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **isDleteBtn** | `bool` | No | `false` | - |
| **label** | `string` | No | `""` | - |
| **onClose** | `func` | No | `undefined` | - |
| **transitionTime** | `number` | No | `600000` | - |
| **type** | `string` | No | `"success"` | - |

**Usage Example:**
```jsx
import { Toast } from "@egovernments/digit-ui-components";

<Toast
  label="Toast"
  type="success"
/>
```

---

### Toggle

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/Toggle.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/Toggle.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **additionalWrapperClass** | `string` | No | - | - |
| **disabled** | `bool` | No | - | - |
| **inputRef** | `object` | No | - | - |
| **onSelect** | `func` | No | - | - |
| **options** | `any` | No | - | - |
| **optionsKey** | `string` | No | - | - |
| **selectedOption** | `any` | No | - | - |
| **variant** | `string` | No | - | - |

**Usage Example:**
```jsx
import { Toggle } from "@egovernments/digit-ui-components";

<Toggle
  options=""
  disabled={false}
  variant="variant"
/>
```

---

### ToggleSwitch

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/ToggleSwitch.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/ToggleSwitch.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **disabled** | `any` | No | - | - |
| **label** | `any` | No | - | - |
| **name** | `string` | No | - | - |
| **onChange** | `func` | No | - | - |
| **ref** | `func` | No | - | - |
| **style** | `any` | No | - | - |
| **value** | `bool` | No | - | - |

**Usage Example:**
```jsx
import { ToggleSwitch } from "@egovernments/digit-ui-components";

<ToggleSwitch
  value={false}
  name="toggleswitch"
  onChange={(value) => console.log(value)}
  label=""
  disabled=""
/>
```

---

### TreeSelect

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/TreeSelect.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/TreeSelect.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **onSelect** | `any` | No | - | - |
| **options** | `any` | No | - | - |
| **optionsKey** | `any` | No | - | - |
| **selectedOption** | `any` | No | - | - |
| **variant** | `any` | No | - | - |

**Usage Example:**
```jsx
import { TreeSelect } from "@egovernments/digit-ui-components";

<TreeSelect
  options=""
  variant=""
/>
```

---

### UploadFile

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/UploadFile.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/UploadFile.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **onUpload** | `func` | ✅ Yes | - | - |
| **removeTargetedFile** | `func` | ✅ Yes | - | - |
| **accept** | `string` | No | - | - |
| **buttonType** | `string` | No | - | - |
| **customClass** | `string` | No | - | - |
| **disabled** | `bool` | No | - | - |
| **enableButton** | `bool` | No | - | - |
| **hintText** | `string` | No | - | - |
| **id** | `string` | No | - | - |
| **inputStyles** | `object` | No | - | - |
| **iserror** | `string` | No | - | - |
| **message** | `string` | No | - | - |
| **multiple** | `bool` | No | - | - |
| **onDelete** | `func` | No | - | - |
| **showHint** | `bool` | No | - | - |
| **showHintBelow** | `bool` | No | - | - |
| **uploadedFiles** | `arrayOf(arrayOf(PropTypes.oneOfType([PropTypes.string` | No | - | - |

**Usage Example:**
```jsx
import { UploadFile } from "@egovernments/digit-ui-components";

<UploadFile
  onUpload={() => {}}
  removeTargetedFile={() => {}}
  disabled={false}
/>
```

---

### UploadImage

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/UploadImage.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/UploadImage.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **fileData** | `any` | No | - | - |
| **handleFileClick** | `any` | No | - | - |
| **multiple** | `any` | No | - | - |
| **onFileDelete** | `any` | No | - | - |
| **onSubmit** | `any` | No | - | - |
| **previews** | `any` | No | - | - |
| **uploadedFilesCount** | `any` | No | - | - |
| **userType** | `any` | No | - | - |

**Usage Example:**
```jsx
import { UploadImage } from "@egovernments/digit-ui-components";

<UploadImage
  multiple=""
  userType=""
  onSubmit={(e) => {}}
/>
```

---

### UploadWidget

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/UploadWidget.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/UploadWidget.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **additionalElements** | `any` | No | - | - |
| **errors** | `any` | No | - | - |
| **fileData** | `any` | No | - | - |
| **fileTypes** | `any` | No | - | - |
| **handleFileClick** | `any` | No | - | - |
| **iserror** | `any` | No | - | - |
| **multiple** | `any` | No | - | - |
| **onFileDelete** | `any` | No | - | - |
| **onSubmit** | `any` | No | - | - |
| **showDownloadButton** | `any` | No | - | - |
| **showErrorCard** | `any` | No | - | - |
| **showReUploadButton** | `any` | No | - | - |

**Usage Example:**
```jsx
import { UploadWidget } from "@egovernments/digit-ui-components";

<UploadWidget
  onSubmit={(e) => {}}
  fileData=""
  onFileDelete={(e) => {}}
/>
```

---

### WhatsNewCard

**Category:** `Atom`  
**Source File:** [`react/ui-components/src/atoms/WhatsNewCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/atoms/WhatsNewCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **actions** | `any` | No | - | - |
| **eventNotificationText** | `any` | No | - | - |
| **header** | `any` | No | - | - |
| **timeApproxiamationInUnits** | `any` | No | - | - |
| **timePastAfterEventCreation** | `any` | No | - | - |

**Usage Example:**
```jsx
import { WhatsNewCard } from "@egovernments/digit-ui-components";

<WhatsNewCard
  header=""
  actions=""
  eventNotificationText=""
/>
```

---


---

## 2. Molecules (Molecular Components)
Molecular components are complex elements composed of multiple atoms working together in a specific role (e.g. details cards, metric group containers).

### ApiDropdown

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/ApiDropdown.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/ApiDropdown.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **allowMultiSelect** | `bool` | ✅ Yes | - | - |
| **className** | `string` | No | - | - |
| **customfn** | `string` | No | - | - |
| **defaultText** | `string` | No | - | - |
| **defaultValue** | `string` | No | - | - |
| **disabled** | `any` | No | - | - |
| **errors** | `object` | No | - | - |
| **formData** | `object` | No | - | - |
| **inputRef** | `object` | No | - | - |
| **isApiLoading** | `bool` | No | - | - |
| **masterName** | `string` | No | - | - |
| **moduleName** | `string` | No | - | - |
| **name** | `string` | No | - | - |
| **onChange** | `func` | No | - | - |
| **options** | `array` | No | - | - |
| **optionsCustomStyle** | `object` | No | - | - |
| **optionsKey** | `string` | No | - | - |
| **populators** | `shape({` | No | - | - |
| **props** | `shape({` | No | - | - |
| **selectedText** | `string` | No | - | - |
| **style** | `object` | No | - | - |
| **value** | `oneOfType([string` | No | - | - |

**Usage Example:**
```jsx
import { ApiDropdown } from "@egovernments/digit-ui-components";

<ApiDropdown
  allowMultiSelect={false}
  name="apidropdown"
  options={[]}
  value="value"
  onChange={(value) => console.log(value)}
  disabled=""
/>
```

---

### BottomSheet

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/BottomSheet.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/BottomSheet.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **actions** | `any` | No | `actions` | - |
| **children** | `any` | No | `additionalElements` | - |
| **className** | `any` | No | - | - |
| **enableActions** | `any` | No | `true` | - |
| **equalWidthButtons** | `any` | No | `true` | - |
| **initialState** | `any` | No | `"closed"` | - |
| **style** | `any` | No | - | - |

**Usage Example:**
```jsx
import { BottomSheet } from "@egovernments/digit-ui-components";

<BottomSheet
  children=additionalElements
  initialState="closed"
  enableActions=true
>
  {/* Children elements go here */}
</BottomSheet>
```

---

### CustomDropdown

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/CustomDropdown.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/CustomDropdown.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **t** | `func` | ✅ Yes | - | - |
| **additionalWrapperClass** | `string` | No | `""` | - |
| **config** | `shape({` | No | - | - |
| **defaultValue** | `string` | No | - | - |
| **disabled** | `bool` | No | - | - |
| **errorStyle** | `object` | No | - | - |
| **filter** | `object` | No | - | - |
| **id** | `any` | No | - | - |
| **innerStyles** | `object` | No | - | - |
| **inputRef** | `object` | No | - | - |
| **label** | `string` | No | - | - |
| **localePrefix** | `string` | No | - | - |
| **masterName** | `string` | No | - | - |
| **mdmsConfig** | `shape({` | No | - | - |
| **mdmsv2** | `any` | No | - | - |
| **moduleName** | `string` | No | - | - |
| **name** | `string` | No | - | - |
| **onChange** | `func` | No | - | - |
| **options** | `array` | No | - | - |
| **optionsCustomStyle** | `object` | No | - | - |
| **optionsKey** | `string` | No | - | - |
| **required** | `bool` | No | - | - |
| **select** | `string` | No | - | - |
| **styles** | `object` | No | - | - |
| **type** | `string` | No | - | - |
| **value** | `oneOfType([string` | No | - | - |
| **variant** | `any` | No | - | - |

**Usage Example:**
```jsx
import { CustomDropdown } from "@egovernments/digit-ui-components";

<CustomDropdown
  t={() => {}}
  name="customdropdown"
  options={[]}
  label="CustomDropdown"
  onChange={(value) => console.log(value)}
  value="value"
  disabled={false}
  type="type"
  variant=""
/>
```

---

### DetailsCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/DetailsCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/DetailsCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **data** | `array` | No | `[]` | - |
| **getRedirectionLink** | `any` | No | - | - |
| **handleClickEnabled** | `any` | No | `true` | - |
| **handleDetailCardClick** | `any` | No | - | - |
| **handleSelect** | `any` | No | - | - |
| **isTwoDynamicPrefix** | `any` | No | `false` | - |
| **keyForSelected** | `any` | No | - | - |
| **linkPrefix** | `any` | No | - | - |
| **redirectedLink** | `any` | No | - | - |
| **selectedItems** | `any` | No | - | - |
| **serviceRequestIdKey** | `any` | No | - | - |
| **showActionBar** | `any` | No | `true` | - |
| **showCitizenInfoLabel** | `any` | No | `false` | - |
| **styleVariant** | `any` | No | `""` | - |
| **submitButtonLabel** | `any` | No | - | - |
| **subRedirectedLink** | `any` | No | - | - |
| **t** | `any` | No | - | - |

**Usage Example:**
```jsx
import { DetailsCard } from "@egovernments/digit-ui-components";

<DetailsCard
  data={[]}
  serviceRequestIdKey=""
  linkPrefix=""
/>
```

---

### FilterCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/FilterCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/FilterCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | ✅ Yes | - | - |
| **onClose** | `func` | ✅ Yes | - | - |
| **addClose** | `bool` | No | - | - |
| **className** | `string` | No | - | - |
| **contentClassName** | `any` | No | - | - |
| **equalWidthButtons** | `bool` | No | - | - |
| **hideIcon** | `bool` | No | - | - |
| **isPopup** | `bool` | No | `false` | - |
| **layoutType** | `oneOf(['horizontal'` | No | `"horizontal"` | - |
| **onOverlayClick** | `func` | No | - | - |
| **onPrimaryPressed** | `func` | No | - | - |
| **onSecondaryPressed** | `func` | No | - | - |
| **primaryActionLabel** | `string` | No | - | - |
| **secondaryActionLabel** | `string` | No | - | - |
| **style** | `object` | No | - | - |
| **title** | `string` | No | - | - |
| **titleIcon** | `element` | No | - | - |

**Usage Example:**
```jsx
import { FilterCard } from "@egovernments/digit-ui-components";

<FilterCard
  children=""
  onClose={() => {}}
>
  {/* Children elements go here */}
</FilterCard>
```

---

### FormCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/FormCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/FormCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | - |
| **className** | `string` | No | - | - |
| **equalWidthButtons** | `bool` | No | - | - |
| **footerData** | `node` | No | - | - |
| **headerData** | `node` | No | - | - |
| **layout** | `string` | No | - | - |
| **style** | `object` | No | `{}` | - |
| **type** | `string` | No | - | - |
| **withDivider** | `bool` | No | - | - |

**Usage Example:**
```jsx
import { FormCard } from "@egovernments/digit-ui-components";

<FormCard
  type="type"
/>
```

---

### FormStep

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/FormStep.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/FormStep.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **_defaultValues** | `any` | No | `{}` | - |
| **cardStyle** | `any` | No | `{}` | - |
| **children** | `any` | No | - | - |
| **childrenAtTheBottom** | `any` | No | `true` | - |
| **componentInFront** | `any` | No | - | - |
| **config** | `shape({})` | No | `{}` | - |
| **forcedError** | `any` | No | - | - |
| **isDisabled** | `any` | No | - | - |
| **isMultipleAllow** | `any` | No | `false` | - |
| **onAdd** | `func` | No | `undefined` | - |
| **onChange** | `any` | No | - | - |
| **onSelect** | `func` | No | `undefined` | - |
| **onSkip** | `func` | No | `undefined` | - |
| **showErrorBelowChildren** | `any` | No | `false` | - |
| **t** | `func` | No | `(value) => value` | - |
| **textInputStyle** | `any` | No | - | - |
| **value** | `any` | No | - | - |

**Usage Example:**
```jsx
import { FormStep } from "@egovernments/digit-ui-components";

<FormStep
  value=""
  onChange={(e) => {}}
/>
```

---

### InputCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/InputCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/InputCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **cardStyle** | `any` | No | `{}` | - |
| **children** | `any` | No | - | - |
| **inputRef** | `any` | No | - | - |
| **inputs** | `any` | No | `[]` | - |
| **isDisable** | `any` | No | - | - |
| **isMultipleAllow** | `any` | No | `false` | - |
| **onAdd** | `func` | No | `undefined` | - |
| **onNext** | `func` | No | `undefined` | - |
| **onSkip** | `func` | No | `undefined` | - |
| **submit** | `bool` | No | `false` | - |
| **t** | `func` | No | `(value) => value` | - |
| **text** | `object` | No | - | - |
| **texts** | `any` | No | `{}` | - |

**Usage Example:**
```jsx
import { InputCard } from "@egovernments/digit-ui-components";

<InputCard
  text={{}}
  submit=false
  onNext={() => {}}
/>
```

---

### LandingPageCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/LandingPageCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/LandingPageCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **icon** | `node` | ✅ Yes | `""` | - |
| **moduleName** | `string` | ✅ Yes | `""` | - |
| **buttonSize** | `any` | No | - | - |
| **centreChildren** | `any` | No | - | - |
| **className** | `string` | No | `""` | - |
| **count** | `oneOfType([string` | No | - | - |
| **endChildren** | `any` | No | - | - |
| **hideDivider** | `bool` | No | `false` | - |
| **iconBg** | `bool` | No | `false` | - |
| **id** | `string` | No | - | - |
| **label** | `string` | No | - | - |
| **link** | `string` | No | - | - |
| **links** | `arrayOf(` | No | `[]` | - |
| **metricAlignment** | `string` | No | `"left"` | - |
| **metrics** | `arrayOf(` | No | `[]` | - |
| **moduleAlignment** | `string` | No | `"right"` | - |
| **onMetricClick** | `func` | No | `() => {}` | - |
| **style** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { LandingPageCard } from "@egovernments/digit-ui-components";

<LandingPageCard
  icon=""
  moduleName="moduleName"
  label="LandingPageCard"
/>
```

---

### LandingPageWrapper

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/LandingPageWrapper.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/LandingPageWrapper.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | ✅ Yes | - | - |
| **className** | `string` | No | `""` | - |
| **styles** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { LandingPageWrapper } from "@egovernments/digit-ui-components";

<LandingPageWrapper
  children=""
>
  {/* Children elements go here */}
</LandingPageWrapper>
```

---

### LocationDropdownWrapper

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/LocationDropdownWrapper.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/LocationDropdownWrapper.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **allowMultiSelect** | `bool` | ✅ Yes | - | - |
| **formData** | `object` | ✅ Yes | - | - |
| **onChange** | `func` | ✅ Yes | - | - |
| **type** | `string` | ✅ Yes | - | - |
| **defaultText** | `string` | No | `"Select an option"` | - |
| **defaultValue** | `string` | No | `""` | - |
| **disabled** | `any` | No | - | - |
| **errors** | `object` | No | `null` | - |
| **inputRef** | `oneOfType([object` | No | `null` | - |
| **isSearchable** | `bool` | No | - | - |
| **optionsCustomStyle** | `object` | No | `{}` | - |
| **optionsKey** | `string` | No | `"options"` | - |
| **populators** | `shape({` | No | `{` | - |
| **props** | `shape({` | No | - | - |
| **selectedText** | `string` | No | `"Selected"` | - |
| **setValue** | `func` | No | - | - |
| **showIcon** | `bool` | No | - | - |
| **value** | `oneOfType([arrayOf(PropTypes.string)` | No | - | - |
| **variant** | `any` | No | - | - |

**Usage Example:**
```jsx
import { LocationDropdownWrapper } from "@egovernments/digit-ui-components";

<LocationDropdownWrapper
  type="type"
  allowMultiSelect={false}
  formData={{}}
  onChange={(value) => console.log(value)}
  value="value"
  variant=""
  disabled=""
/>
```

---

### MenuCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/MenuCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/MenuCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **icon** | `node` | ✅ Yes | `""` | - |
| **menuName** | `string` | ✅ Yes | `""` | - |
| **className** | `string` | No | `""` | - |
| **description** | `string` | No | `""` | - |
| **onClick** | `func` | No | `() => {}` | - |
| **styles** | `object` | No | `{}` | - |

**Usage Example:**
```jsx
import { MenuCard } from "@egovernments/digit-ui-components";

<MenuCard
  icon=""
  menuName="menuName"
  onClick=() => {}
/>
```

---

### MenuCardWrapper

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/MenuCardWrapper.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/MenuCardWrapper.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | ✅ Yes | - | - |
| **className** | `string` | No | `""` | - |
| **styles** | `object` | No | `{` | - |

**Usage Example:**
```jsx
import { MenuCardWrapper } from "@egovernments/digit-ui-components";

<MenuCardWrapper
  children=""
>
  {/* Children elements go here */}
</MenuCardWrapper>
```

---

### MetricCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/MetricCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/MetricCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **description** | `string` | ✅ Yes | `"Test Compilance"` | - |
| **status** | `string` | ✅ Yes | `"Decreased"` | - |
| **value** | `string` | ✅ Yes | `"3%"` | - |
| **className** | `string` | No | `""` | - |
| **layout** | `string` | No | `"1*1"` | - |
| **metrics** | `arrayOf(` | No | `[]` | - |
| **statusmessage** | `string` | No | `"10% than state average"` | - |
| **styles** | `object` | No | `{}` | - |
| **withBottomDivider** | `bool` | No | `false` | - |
| **withDivider** | `bool` | No | `false` | - |

**Usage Example:**
```jsx
import { MetricCard } from "@egovernments/digit-ui-components";

<MetricCard
  value="3%"
  description="Test Compilance"
  status="Decreased"
/>
```

---

### MultiUploadWrapper

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/MultiUploadWrapper.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/MultiUploadWrapper.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **t** | `func` | ✅ Yes | - | - |
| **.aif** | `any` | No | - | - |
| **.dxf"** | `any` | No | - | - |
| **.image** | `any` | No | - | - |
| **.jpeg** | `any` | No | - | - |
| **.jpg** | `any` | No | - | - |
| **.msword** | `any` | No | - | - |
| **.openxmlformats-officedocument** | `any` | No | - | - |
| **.pdf** | `any` | No | - | - |
| **.png** | `any` | No | - | - |
| **.webp** | `any` | No | - | - |
| **acceptFiles** | `string` | No | `"image/*` | - |
| **allowedFileTypesRegex** | `instanceOf(RegExp)` | No | `/(.*?)(jpg|jpeg|webp|aif|png|image|pdf|msword|openxmlformats-officedocument)$/i` | - |
| **allowedMaxSizeInMB** | `number` | No | `10` | - |
| **containerStyles** | `object` | No | - | - |
| **customClass** | `string` | No | `""` | - |
| **customErrorMsg** | `string` | No | - | - |
| **extraStyleName** | `string` | No | `""` | - |
| **getFormState** | `func` | No | - | - |
| **hintText** | `string` | No | - | - |
| **maxFilesAllowed** | `number` | No | - | - |
| **module** | `string` | No | `"PGR"` | - |
| **requestSpecifcFileRemoval** | `object` | No | - | - |
| **setuploadedstate** | `array` | No | `[]` | - |
| **showHintBelow** | `bool` | No | - | - |
| **tenantId** | `string` | No | `Digit.ULBService.getStateId()` | - |

**Usage Example:**
```jsx
import { MultiUploadWrapper } from "@egovernments/digit-ui-components";

<MultiUploadWrapper
  t={() => {}}
/>
```

---

### PanelCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/PanelCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/PanelCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `node` | No | - | - |
| **className** | `string` | No | - | - |
| **customIcon** | `string` | No | - | - |
| **footerChildren** | `node` | No | - | - |
| **iconFill** | `string` | No | - | - |
| **info** | `string` | No | - | - |
| **message** | `string` | No | - | - |
| **multipleResponses** | `array` | No | - | - |
| **response** | `string` | No | - | - |
| **style** | `object` | No | - | - |
| **type** | `string` | No | - | - |

**Usage Example:**
```jsx
import { PanelCard } from "@egovernments/digit-ui-components";

<PanelCard
  type="type"
/>
```

---

### ResultsDataTable

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/ResultsDataTable.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/ResultsDataTable.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **actions** | `any` | No | - | - |
| **columns** | `any` | No | - | - |
| **conditionalRowStyles** | `any` | No | - | - |
| **data** | `any` | No | - | - |
| **defaultSortAsc** | `any` | No | - | - |
| **enableColumnSort** | `any` | No | - | - |
| **enableGlobalSearch** | `any` | No | - | - |
| **expandableRows** | `any` | No | - | - |
| **expandableRowsComponent** | `any` | No | - | - |
| **handleActionSelect** | `any` | No | - | - |
| **isPaginationRequired** | `any` | No | - | - |
| **onChangePage** | `any` | No | - | - |
| **onChangeRowsPerPage** | `any` | No | - | - |
| **onRowClicked** | `any` | No | - | - |
| **onRowExpandToggled** | `any` | No | - | - |
| **onSearch** | `any` | No | - | - |
| **onSelectedRowsChange** | `any` | No | - | - |
| **paginationComponentOptions** | `any` | No | - | - |
| **paginationDefaultPage** | `any` | No | - | - |
| **paginationPerPage** | `any` | No | - | - |
| **paginationRowsPerPageOptions** | `any` | No | - | - |
| **paginationTotalRows** | `any` | No | - | - |
| **progressComponent** | `any` | No | - | - |
| **progressPending** | `any` | No | - | - |
| **rowsPerPageText** | `any` | No | - | - |
| **searchHeader** | `any` | No | - | - |
| **selectableRowsNoSelectAll** | `any` | No | - | - |
| **selectedRows** | `any` | No | - | - |
| **selectProps** | `any` | No | - | - |
| **showCheckBox** | `any` | No | - | - |
| **showSelectedState** | `any` | No | - | - |
| **showSelectedStatePosition** | `any` | No | `"top"` | - |
| **showTableDescription** | `any` | No | - | - |
| **showTableTitle** | `any` | No | - | - |
| **tableClassName** | `any` | No | - | - |

**Usage Example:**
```jsx
import { ResultsDataTable } from "@egovernments/digit-ui-components";

<ResultsDataTable
  data=""
  columns=""
  showCheckBox={false}
/>
```

---

### SearchAction

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/SearchAction.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/SearchAction.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **handleActionClick** | `any` | No | - | - |
| **text** | `any` | No | - | - |

**Usage Example:**
```jsx
import { SearchAction } from "@egovernments/digit-ui-components";

<SearchAction
  text=""
  handleActionClick=""
/>
```

---

### SearchForm

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/SearchForm.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/SearchForm.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `any` | No | - | - |
| **className** | `any` | No | `""` | - |
| **handleSubmit** | `any` | No | - | - |
| **id** | `any` | No | - | - |
| **onSubmit** | `any` | No | - | - |
| **variant** | `any` | No | `""` | - |

**Usage Example:**
```jsx
import { SearchForm } from "@egovernments/digit-ui-components";

<SearchForm
  variant=""
/>
```

---

### SearchOnRadioButtons

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/SearchOnRadioButtons.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/SearchOnRadioButtons.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **additionalWrapperClass** | `any` | No | - | - |
| **onSearchQueryChange** | `any` | No | - | - |
| **onSelect** | `any` | No | - | - |
| **options** | `any` | No | - | - |
| **optionsKey** | `any` | No | - | - |
| **placeholder** | `any` | No | - | - |
| **SearchQueryValue** | `any` | No | - | - |
| **selectedOption** | `any` | No | - | - |
| **SignatureImage** | `any` | No | `() => <SVG.Search />` | - |

**Usage Example:**
```jsx
import { SearchOnRadioButtons } from "@egovernments/digit-ui-components";

<SearchOnRadioButtons
  options=""
  placeholder=""
/>
```

---

### SortAction

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/SortAction.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/SortAction.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **handleActionClick** | `any` | No | - | - |
| **text** | `any` | No | - | - |

**Usage Example:**
```jsx
import { SortAction } from "@egovernments/digit-ui-components";

<SortAction
  text=""
  handleActionClick=""
/>
```

---

### SummaryCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/SummaryCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/SummaryCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **sections** | `array` | ✅ Yes | - | - |
| **asSeperateCards** | `bool` | No | - | - |
| **className** | `string` | No | - | - |
| **layout** | `number` | No | - | - |
| **showSectionsAsMultipleCards** | `bool` | No | - | - |
| **style** | `object` | No | - | - |
| **type** | `string` | No | - | - |
| **withDivider** | `bool` | No | - | - |
| **withSectionDivider** | `bool` | No | - | - |

**Usage Example:**
```jsx
import { SummaryCard } from "@egovernments/digit-ui-components";

<SummaryCard
  type="type"
  sections={[]}
/>
```

---

### TableMolecule

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/TableMolecule.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/TableMolecule.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **headerData** | `array` | ✅ Yes | `headerData` | - |
| **rows** | `array` | ✅ Yes | `rows` | - |
| **actionButtonLabel** | `any` | No | - | - |
| **actions** | `any` | No | `[]` | - |
| **addCheckbox** | `bool` | No | `false` | - |
| **addFilter** | `any` | No | - | - |
| **addStickyFooter** | `bool` | No | `false` | - |
| **checkboxLabel** | `string` | No | `""` | - |
| **className** | `any` | No | - | - |
| **extraStyles** | `object` | No | `{}` | - |
| **footerContent** | `node` | No | `null` | - |
| **footerProps** | `shape({` | No | `{` | - |
| **frozenColumns** | `any` | No | `0` | - |
| **hideFooter** | `bool` | No | `false` | - |
| **initialRowsPerPage** | `number` | No | `5` | - |
| **initialSelectedRows** | `array` | No | `[]` | - |
| **initialSortOrder** | `string` | No | `"ascending"` | - |
| **isStickyFooter** | `bool` | No | `false` | - |
| **isStickyHeader** | `any` | No | `false` | - |
| **isTableSortable** | `bool` | No | `true` | - |
| **manualPagination** | `bool` | No | `false` | - |
| **onFilter** | `any` | No | - | - |
| **onNextPage** | `func` | No | `() => {}` | - |
| **onPageSizeChange** | `func` | No | `() => {}` | - |
| **onPrevPage** | `func` | No | `() => {}` | - |
| **onRowClick** | `any` | No | - | - |
| **onSelectedRowsChange** | `func` | No | `() => {}` | - |
| **pagination** | `shape({` | No | `{` | - |
| **rowsPerPageOptions** | `arrayOf(number)` | No | `[5, 10, 15, 20]` | - |
| **scrollableStickyFooterContent** | `bool` | No | `true` | - |
| **selection** | `shape({` | No | `{` | - |
| **showSelectedState** | `bool` | No | `false` | - |
| **sorting** | `shape({` | No | `{` | - |
| **stickyFooterContent** | `node` | No | `null` | - |
| **styles** | `shape({` | No | `{` | - |
| **tableDescription** | `string` | No | `""` | - |
| **tableDetails** | `shape({` | No | `{` | - |
| **tableTitle** | `string` | No | `""` | - |
| **totalCount** | `number` | No | `undefined` | - |
| **withAlternateBg** | `bool` | No | `false` | - |
| **withBorder** | `bool` | No | `false` | - |
| **withColumnDivider** | `bool` | No | `false` | - |
| **withHeaderDivider** | `bool` | No | `true` | - |
| **withRowDivider** | `bool` | No | `true` | - |
| **wrapperClassName** | `any` | No | - | - |

**Usage Example:**
```jsx
import { TableMolecule } from "@egovernments/digit-ui-components";

<TableMolecule
  headerData=headerData
  rows=rows
/>
```

---

### TextInputCard

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/TextInputCard.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/TextInputCard.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **cardLabel** | `string` | No | `""` | - |
| **cardText** | `string` | No | `""` | - |
| **header** | `string` | No | `""` | - |
| **nextText** | `string` | No | `""` | - |
| **onSave** | `func` | No | `undefined` | - |
| **onSkip** | `func` | No | `undefined` | - |
| **skip** | `bool` | No | `true` | - |
| **skipAndContinueText** | `string` | No | `""` | - |
| **subHeader** | `string` | No | `""` | - |
| **textInput** | `string` | No | `""` | - |

**Usage Example:**
```jsx
import { TextInputCard } from "@egovernments/digit-ui-components";

<TextInputCard
  header="header"
  subHeader="subHeader"
  cardText="cardText"
/>
```

---

### TimelineMolecule

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/TimelineMolecule.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/TimelineMolecule.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `any` | No | - | - |
| **FutureIcon** | `any` | No | - | - |
| **hideFutureLabel** | `any` | No | - | - |
| **hidePastLabel** | `any` | No | - | - |
| **initialVisibleCount** | `any` | No | `3` | - |
| **pastIcon** | `any` | No | - | - |
| **viewLessLabelForFuture** | `any` | No | - | - |
| **viewLessLabelForPast** | `any` | No | - | - |
| **viewMoreLabelForFuture** | `any` | No | - | - |
| **viewMoreLabelForPast** | `any` | No | - | - |

**Usage Example:**
```jsx
import { TimelineMolecule } from "@egovernments/digit-ui-components";

<TimelineMolecule
  children=""
  initialVisibleCount=3
  viewLessLabelForFuture=""
>
  {/* Children elements go here */}
</TimelineMolecule>
```

---

### TooltipWrapper

**Category:** `Molecule`  
**Source File:** [`react/ui-components/src/molecules/TooltipWrapper.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/molecules/TooltipWrapper.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `element` | ✅ Yes | - | - |
| **title** | `node` | ✅ Yes | - | - |
| **arrow** | `bool` | No | `true` | - |
| **ClassName** | `any` | No | - | - |
| **content** | `any` | No | - | - |
| **description** | `any` | No | - | - |
| **disableFocusListener** | `bool` | No | `false` | - |
| **disableHoverListener** | `bool` | No | `false` | - |
| **disableInteractive** | `bool` | No | `false` | - |
| **disableTouchListener** | `bool` | No | `false` | - |
| **enterDelay** | `number` | No | `100` | - |
| **followCursor** | `bool` | No | `false` | - |
| **header** | `any` | No | - | - |
| **leaveDelay** | `number` | No | `0` | - |
| **onClose** | `func` | No | - | - |
| **onOpen** | `func` | No | - | - |
| **open** | `bool` | No | - | - |
| **open: openProp** | `any` | No | - | - |
| **placement** | `oneOf([` | No | `"bottom"` | - |
| **style** | `object` | No | `{` | - |
| **theme** | `any` | No | - | - |
| **wrapperClassName** | `any` | No | - | - |

**Usage Example:**
```jsx
import { TooltipWrapper } from "@egovernments/digit-ui-components";

<TooltipWrapper
  children=""
  title=""
>
  {/* Children elements go here */}
</TooltipWrapper>
```

---


---

## 3. HOCs (Higher-Order Components)
HOCs manage state, layouts, form orchestrations, validation patterns, or specific page/inbox configurations.

### AppLocalisationWrapper

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/app-config-screen-builder/AppLocalisationWrapper.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/app-config-screen-builder/AppLocalisationWrapper.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **back** | `any` | No | - | - |
| **localeModule** | `any` | No | - | - |
| **onSubmit** | `any` | No | - | - |
| **parentDispatch** | `any` | No | - | - |
| **screenConfig** | `any` | No | - | - |
| **showBack** | `any` | No | - | - |

**Usage Example:**
```jsx
import { AppLocalisationWrapper } from "@egovernments/digit-ui-components";

<AppLocalisationWrapper
  onSubmit={(e) => {}}
  localeModule=""
  screenConfig=""
/>
```

---

### BoundaryFilter

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/BoundaryFilter.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/BoundaryFilter.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { BoundaryFilter } from "@egovernments/digit-ui-components";

<BoundaryFilter />
```

---

### ButtonIdentificationProvider

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/ButtonIdentificationContext.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/ButtonIdentificationContext.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `any` | No | - | - |
| **composerId** | `any` | No | `''` | - |
| **composerType** | `any` | No | `'standalone'` | - |
| **sectionId** | `any` | No | `''` | - |

**Usage Example:**
```jsx
import { ButtonIdentificationProvider } from "@egovernments/digit-ui-components";

<ButtonIdentificationProvider
  composerType='standalone'
  composerId=''
  sectionId=''
/>
```

---

### FieldComposer

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/FieldComposer.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/FieldComposer.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **charCount** | `any` | No | - | - |
| **component** | `any` | No | - | - |
| **config** | `any` | No | - | - |
| **controllerProps** | `any` | No | - | - |
| **disable** | `any` | No | `false` | - |
| **errors** | `any` | No | - | - |
| **focused** | `any` | No | `false` | - |
| **formData** | `any` | No | - | - |
| **isMandatory** | `any` | No | - | - |
| **noneditable** | `any` | No | `false` | - |
| **onBlur** | `any` | No | - | - |
| **onChange** | `any` | No | - | - |
| **placeholder** | `any` | No | - | - |
| **populators** | `any` | No | - | - |
| **props** | `any` | No | - | - |
| **ref** | `any` | No | - | - |
| **sectionFormCategory** | `any` | No | - | - |
| **selectedFormCategory** | `any` | No | - | - |
| **type** | `any` | No | - | - |
| **value** | `any` | No | - | - |
| **variant** | `any` | No | - | - |

**Usage Example:**
```jsx
import { FieldComposer } from "@egovernments/digit-ui-components";

<FieldComposer
  type=""
  onChange={(e) => {}}
  value=""
  variant=""
  placeholder=""
/>
```

---

### FieldController

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/FieldController.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/FieldController.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { FieldController } from "@egovernments/digit-ui-components";

<FieldController />
```

---

### Fields

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/Fields.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/Fields.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { Fields } from "@egovernments/digit-ui-components";

<Fields />
```

---

### FieldV1

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/FieldV1.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/FieldV1.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **charCount** | `any` | No | `false` | - |
| **component** | `any` | No | - | - |
| **config** | `any` | No | - | - |
| **control** | `any` | No | - | - |
| **controllerProps** | `any` | No | - | - |
| **defaultValues** | `any` | No | - | - |
| **description** | `any` | No | `""` | - |
| **disabled** | `any` | No | `false` | - |
| **disablePortal** | `any` | No | - | - |
| **error** | `any` | No | `""` | - |
| **errors** | `any` | No | - | - |
| **formData** | `any` | No | - | - |
| **infoMessage** | `any` | No | - | - |
| **inline** | `any` | No | `false` | - |
| **label** | `any` | No | `""` | - |
| **nonEditable** | `any` | No | `false` | - |
| **onBlur** | `any` | No | - | - |
| **onChange** | `any` | No | `() => { }` | - |
| **placeholder** | `any` | No | `""` | - |
| **populators** | `any` | No | `{}` | - |
| **props** | `any` | No | `{}` | - |
| **ref** | `any` | No | - | - |
| **required** | `any` | No | `false` | - |
| **sectionFormCategory** | `any` | No | - | - |
| **selectedFormCategory** | `any` | No | - | - |
| **type** | `any` | No | `""` | - |
| **value** | `any` | No | `""` | - |
| **variant** | `any` | No | - | - |
| **withoutLabel** | `any` | No | `false` | - |

**Usage Example:**
```jsx
import { FieldV1 } from "@egovernments/digit-ui-components";

<FieldV1
  type=""
  value=""
  onChange=() => { }
  label=""
  disabled=false
  placeholder=""
  variant=""
/>
```

---

### FormComposerCitizen

*FormComposerCitizen Handles dynamic form rendering based on the given configuration. Supports form navigation, session storage, and form submission. used to render forms in citizen screens way mostly targetted for mobile views refer this implementation of sample file micro-ui/web/micro-ui-internals/packages/modules/utilities/src/pages/employee/Sample/CitizenCreate.js still not used officialy anywhere so feel free to contribute new features to use this hoc*

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/FormComposerCitizen.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/FormComposerCitizen.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **baseRoute** | `any` | No | `""` | - |
| **config: baseConfig** | `any` | No | - | - |
| **fieldStyle** | `any` | No | `{ marginRight: 0 }` | - |
| **nextStepLabel** | `any` | No | - | - |
| **onFormValueChange** | `any` | No | - | - |
| **onSubmit: onFinalSubmit** | `any` | No | - | - |
| **sessionKey** | `any` | No | `"DEFAULT_CITIZEN_CREATE"` | - |
| **submitInForm** | `any` | No | `true` | - |
| **submitLabel** | `any` | No | - | - |

**Usage Example:**
```jsx
import { FormComposerCitizen } from "@egovernments/digit-ui-components";

<FormComposerCitizen
  config: baseConfig=""
  onSubmit: onFinalSubmit={(e) => {}}
  onFormValueChange={(e) => {}}
/>
```

---

### FormComposerStudio

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/FormComposerStudio.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/FormComposerStudio.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { FormComposerStudio } from "@egovernments/digit-ui-components";

<FormComposerStudio />
```

---

### FormComposerV2

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/FormComposerV2.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/FormComposerV2.js)

*This component does not accept any specific custom props.*

**Usage Example:**
```jsx
import { FormComposerV2 } from "@egovernments/digit-ui-components";

<FormComposerV2 />
```

---

### InboxSearchComposer

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/InboxSearchComposer.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/InboxSearchComposer.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **additionalConfig** | `any` | No | - | - |
| **configs** | `any` | No | - | - |
| **customizers** | `any` | No | `{}` | - |
| **onClearSearch** | `any` | No | - | - |
| **onFormValueChange** | `any` | No | `()=>{}` | - |
| **onTabChange** | `any` | No | - | - |
| **showTab** | `any` | No | - | - |
| **tabData** | `any` | No | - | - |

**Usage Example:**
```jsx
import { InboxSearchComposer } from "@egovernments/digit-ui-components";

<InboxSearchComposer
  configs=""
  additionalConfig=""
  onFormValueChange=()=>{}
/>
```

---

### Modal

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/Modal.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/Modal.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **// isOBPSFlow** | `any` | No | `false` | - |
| **actionCancelLabel** | `any` | No | - | - |
| **actionCancelOnSubmit** | `any` | No | - | - |
| **actionSaveLabel** | `any` | No | - | - |
| **actionSaveOnSubmit** | `any` | No | - | - |
| **children** | `any` | No | - | - |
| **error** | `any` | No | - | - |
| **formId** | `any` | No | - | - |
| **headerBarEnd** | `any` | No | - | - |
| **headerBarMain** | `any` | No | - | - |
| **headerBarMainStyle** | `any` | No | - | - |
| **hideSubmit** | `any` | No | - | - |
| **isDisabled** | `any` | No | - | - |
| **popupModuleActionBarStyles** | `any` | No | `{}` | - |
| **popupModuleMianStyles** | `any` | No | - | - |
| **popupStyles** | `any` | No | - | - |
| **setError** | `any` | No | - | - |
| **style** | `any` | No | `{}` | - |
| **variant** | `any` | No | `""` | - |

**Usage Example:**
```jsx
import { Modal } from "@egovernments/digit-ui-components";

<Modal
  variant=""
/>
```

---

### ResultsDataTableWrapper

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/ResultsDataTableWrapper.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/ResultsDataTableWrapper.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **activeLink** | `any` | No | - | - |
| **additionalConfig** | `any` | No | - | - |
| **browserSession** | `any` | No | - | - |
| **config** | `any` | No | - | - |
| **data** | `any` | No | - | - |
| **fullConfig** | `any` | No | - | - |
| **isFetching** | `any` | No | - | - |
| **isLoading** | `any` | No | - | - |
| **manualPagination** | `any` | No | - | - |
| **onNextPage** | `any` | No | - | - |
| **onPageSizeChange** | `any` | No | - | - |
| **onPrevPage** | `any` | No | - | - |
| **refetch** | `any` | No | - | - |
| **revalidate** | `any` | No | - | - |
| **rowsPerPageOptions** | `any` | No | `[5, 10, 15, 20]` | - |
| **tabData** | `any` | No | - | - |
| **TotalCount** | `any` | No | - | - |
| **type** | `any` | No | - | - |

**Usage Example:**
```jsx
import { ResultsDataTableWrapper } from "@egovernments/digit-ui-components";

<ResultsDataTableWrapper
  type=""
/>
```

---

### ResultsTable

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/ResultsTable.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/ResultsTable.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **activeLink** | `any` | No | - | - |
| **additionalConfig** | `any` | No | - | - |
| **browserSession** | `any` | No | - | - |
| **config** | `any` | No | - | - |
| **data** | `any` | No | - | - |
| **fullConfig** | `any` | No | - | - |
| **isFetching** | `any` | No | - | - |
| **isLoading** | `any` | No | - | - |
| **revalidate** | `any` | No | - | - |
| **tableContainerClass** | `any` | No | - | - |
| **type** | `any` | No | - | - |

**Usage Example:**
```jsx
import { ResultsTable } from "@egovernments/digit-ui-components";

<ResultsTable
  type=""
/>
```

---

### SectionIdentificationProvider

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/ButtonIdentificationContext.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/ButtonIdentificationContext.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **children** | `any` | No | - | - |
| **sectionId** | `any` | No | - | - |

**Usage Example:**
```jsx
import { SectionIdentificationProvider } from "@egovernments/digit-ui-components";

<SectionIdentificationProvider
  sectionId=""
  children=""
>
  {/* Children elements go here */}
</SectionIdentificationProvider>
```

---

### Tooltip

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/app-config-screen-builder/ConsoleToolTip.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/app-config-screen-builder/ConsoleToolTip.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **content** | `any` | No | - | - |
| **position** | `any` | No | - | - |

**Usage Example:**
```jsx
import { Tooltip } from "@egovernments/digit-ui-components";

<Tooltip
  content=""
  position=""
/>
```

---

### UploadFileComposer

**Category:** `HOC`  
**Source File:** [`react/ui-components/src/hoc/UploadFileComposer.js`](file:///c:/Users/sarvo/Downloads/DIGIT-UI-LIBRARIES-develop/DIGIT-UI-LIBRARIES-develop/react/ui-components/src/hoc/UploadFileComposer.js)

| Prop Name | Type | Required | Default Value | Description |
| :--- | :--- | :---: | :--- | :--- |
| **config** | `object` | ✅ Yes | - | - |
| **control** | `object` | ✅ Yes | - | - |
| **Controller** | `func` | ✅ Yes | - | - |
| **data** | `object` | ✅ Yes | - | - |
| **errors** | `object` | ✅ Yes | - | - |
| **formData** | `object` | ✅ Yes | - | - |
| **localePrefix** | `string` | ✅ Yes | - | - |
| **module** | `string` | ✅ Yes | - | - |
| **register** | `func` | ✅ Yes | - | - |
| **tenant** | `object` | ✅ Yes | - | - |
| **customClass** | `string` | No | - | - |
| **customErrorMsg** | `string` | No | - | - |
| **mdmsModuleName** | `any` | No | `'works'` | - |

**Usage Example:**
```jsx
import { UploadFileComposer } from "@egovernments/digit-ui-components";

<UploadFileComposer
  module="module"
  config={{}}
  Controller={() => {}}
  control={{}}
  register={() => {}}
  formData={{}}
  errors={{}}
  localePrefix="localePrefix"
  data={{}}
  tenant={{}}
/>
```

---
