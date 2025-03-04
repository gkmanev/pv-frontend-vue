<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Internationalization Datepicker -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Internationalization Datepicker"
    subtitle="Internationalization of the date picker's calendar is provided via Intl.DateTimeFormat, except for labels applied to elements of the calendar control"
    modalid="modal-11"
    modaltitle="Internationalization Datepicker"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;example-locales&quot;&gt;Locale:&lt;/label&gt;
    &lt;b-form-select id=&quot;example-locales&quot; v-model=&quot;locale&quot; :options=&quot;locales&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-select&gt;

    &lt;label for=&quot;example-weekdays&quot;&gt;Start weekday:&lt;/label&gt;
    &lt;b-form-select id=&quot;example-weekdays&quot; v-model=&quot;weekday&quot; :options=&quot;weekdays&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-select&gt;

    &lt;div&gt;
      &lt;b-form-checkbox v-model=&quot;showDecadeNav&quot; switch inline class=&quot;my-2&quot;&gt;
        Show decade navigation buttons
      &lt;/b-form-checkbox&gt;

      &lt;b-form-checkbox v-model=&quot;hideHeader&quot; switch inline class=&quot;my-2&quot;&gt;
        Hide calendar header
      &lt;/b-form-checkbox&gt;
    &lt;/div&gt;

    &lt;label for=&quot;example-i18n-picker&quot;&gt;Date picker:&lt;/label&gt;
    &lt;b-form-datepicker
      id=&quot;example-i18n-picker&quot;
      v-model=&quot;value&quot;
      v-bind=&quot;labels[locale] || {}&quot;
      :locale=&quot;locale&quot;
      :start-weekday=&quot;weekday&quot;
      :show-decade-nav=&quot;showDecadeNav&quot;
      :hide-header=&quot;hideHeader&quot;
      class=&quot;mb-2&quot;
     &gt;&lt;/b-form-datepicker&gt;
     &lt;p&gt;Value: &lt;b&gt;'{{ value }}'&lt;/b&gt;&lt;/p&gt;
   &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: '',
        locale: 'en-US',
        showDecadeNav: false,
        hideHeader: false,
        locales: [
          { value: 'en-US', text: 'English US (en-US)' },
          { value: 'de', text: 'German (de)' },
          { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },
          { value: 'zh', text: 'Chinese (zh)' }
        ],
        weekday: 0,
        weekdays: [
          { value: 0, text: 'Sunday' },
          { value: 1, text: 'Monday' },
          { value: 6, text: 'Saturday' }
        ],
        labels: {
          de: {
            labelPrevDecade: 'Vorheriges Jahrzehnt',
            labelPrevYear: 'Vorheriges Jahr',
            labelPrevMonth: 'Vorheriger Monat',
            labelCurrentMonth: 'Aktueller Monat',
            labelNextMonth: 'N&auml;chster Monat',
            labelNextYear: 'N&auml;chstes Jahr',
            labelNextDecade: 'N&auml;chstes Jahrzehnt',
            labelToday: 'Heute',
            labelSelected: 'Ausgew&auml;hltes Datum',
            labelNoDateSelected: 'Kein Datum gew&auml;hlt',
            labelCalendar: 'Kalender',
            labelNav: 'Kalendernavigation',
            labelHelp: 'Mit den Pfeiltasten durch den Kalender navigieren'
          },
          'ar-EG': {
            weekdayHeaderFormat: 'narrow',
            labelPrevDecade: 'العقد السابق',
            labelPrevYear: 'العام السابق',
            labelPrevMonth: 'الشهر السابق',
            labelCurrentMonth: 'الشهر الحالي',
            labelNextMonth: 'الشهر المقبل',
            labelNextYear: 'العام المقبل',
            labelNextDecade: 'العقد القادم',
            labelToday: 'اليوم',
            labelSelected: 'التاريخ المحدد',
            labelNoDateSelected: 'لم يتم اختيار تاريخ',
            labelCalendar: 'التقويم',
            labelNav: 'الملاحة التقويم',
            labelHelp: 'استخدم مفاتيح المؤشر للتنقل في التواريخ'
          },
          zh: {
            weekdayHeaderFormat: 'narrow',
            labelPrevDecade: '过去十年',
            labelPrevYear: '上一年',
            labelPrevMonth: '上个月',
            labelCurrentMonth: '当前月份',
            labelNextMonth: '下个月',
            labelNextYear: '明年',
            labelNextDecade: '下一个十年',
            labelToday: '今天',
            labelSelected: '选定日期',
            labelNoDateSelected: '未选择日期',
            labelCalendar: '日历',
            labelNav: '日历导航',
            labelHelp: '使用光标键浏览日期'
          }
        }
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="example-locales">Locale:</label>
      <b-form-select
        id="example-locales"
        v-model="locale"
        :options="locales"
        class="mb-2"
      ></b-form-select>

      <label for="example-weekdays">Start weekday:</label>
      <b-form-select
        id="example-weekdays"
        v-model="weekday"
        :options="weekdays"
        class="mb-2"
      ></b-form-select>

      <div>
        <b-form-checkbox v-model="showDecadeNav" switch inline class="my-2">
          Show decade navigation buttons
        </b-form-checkbox>

        <b-form-checkbox v-model="hideHeader" switch inline class="my-2">
          Hide calendar header
        </b-form-checkbox>
      </div>

      <label for="example-i18n-picker">Date picker:</label>
      <b-form-datepicker
        id="example-i18n-picker"
        v-model="value"
        v-bind="labels[locale] || {}"
        :locale="locale"
        :start-weekday="weekday"
        :show-decade-nav="showDecadeNav"
        :hide-header="hideHeader"
        class="mb-2"
      ></b-form-datepicker>
      <p>
        Value: <b>'{{ value }}'</b>
      </p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "InternationalizationDatepicker",

  data: () => ({
    value: "",
    locale: "en-US",
    showDecadeNav: false,
    hideHeader: false,
    locales: [
      { value: "en-US", text: "English US (en-US)" },
      { value: "de", text: "German (de)" },
      { value: "ar-EG", text: "Arabic Egyptian (ar-EG)" },
      { value: "zh", text: "Chinese (zh)" },
    ],
    weekday: 0,
    weekdays: [
      { value: 0, text: "Sunday" },
      { value: 1, text: "Monday" },
      { value: 6, text: "Saturday" },
    ],
    labels: {
      de: {
        labelPrevDecade: "Vorheriges Jahrzehnt",
        labelPrevYear: "Vorheriges Jahr",
        labelPrevMonth: "Vorheriger Monat",
        labelCurrentMonth: "Aktueller Monat",
        labelNextMonth: "Nächster Monat",
        labelNextYear: "Nächstes Jahr",
        labelNextDecade: "Nächstes Jahrzehnt",
        labelToday: "Heute",
        labelSelected: "Ausgewähltes Datum",
        labelNoDateSelected: "Kein Datum gewählt",
        labelCalendar: "Kalender",
        labelNav: "Kalendernavigation",
        labelHelp: "Mit den Pfeiltasten durch den Kalender navigieren",
      },
      "ar-EG": {
        weekdayHeaderFormat: "narrow",
        labelPrevDecade: "العقد السابق",
        labelPrevYear: "العام السابق",
        labelPrevMonth: "الشهر السابق",
        labelCurrentMonth: "الشهر الحالي",
        labelNextMonth: "الشهر المقبل",
        labelNextYear: "العام المقبل",
        labelNextDecade: "العقد القادم",
        labelToday: "اليوم",
        labelSelected: "التاريخ المحدد",
        labelNoDateSelected: "لم يتم اختيار تاريخ",
        labelCalendar: "التقويم",
        labelNav: "الملاحة التقويم",
        labelHelp: "استخدم مفاتيح المؤشر للتنقل في التواريخ",
      },
      zh: {
        weekdayHeaderFormat: "narrow",
        labelPrevDecade: "过去十年",
        labelPrevYear: "上一年",
        labelPrevMonth: "上个月",
        labelCurrentMonth: "当前月份",
        labelNextMonth: "下个月",
        labelNextYear: "明年",
        labelNextDecade: "下一个十年",
        labelToday: "今天",
        labelSelected: "选定日期",
        labelNoDateSelected: "未选择日期",
        labelCalendar: "日历",
        labelNav: "日历导航",
        labelHelp: "使用光标键浏览日期",
      },
    },
  }),
  components: { BaseCard },
};
</script>