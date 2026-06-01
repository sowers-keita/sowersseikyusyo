import React, { useMemo, useState } from "react";
import { Plus, Trash2, Printer, FileText, CalendarDays, UserPlus } from "lucide-react";

const schools = [
  {
    id: "itoshima-acro",
    area: "福岡",
    name: "糸島アクロ体操教室",
    day: "土曜（月3回）",
    venue: "キッズガリレオ糸島教室",
    defaultRate: 1200,
    classes: [
      { name: "ジュニア", time: "10:30-11:30" },
      { name: "スタート", time: "14:00-15:00" },
    ],
  },
  {
    id: "murokawa-acro",
    area: "沖縄",
    name: "室川アクロ体操教室",
    day: "月曜（月3回）",
    venue: "室川自治公民館",
    defaultRate: 1200,
    classes: [
      { name: "キッズ体操", time: "17:50-18:50" },
      { name: "キッズバク転", time: "19:00-20:00" },
      { name: "大人バク転", time: "20:10-21:30" },
    ],
  },
  {
    id: "chatan-acro",
    area: "沖縄",
    name: "北谷アクロ体操教室",
    day: "木曜（毎週）",
    venue: "砂辺公民館",
    defaultRate: 1200,
    classes: [
      { name: "ジュニアA", time: "16:50-17:50" },
      { name: "ジュニアB", time: "18:00-19:00" },
    ],
  },
  {
    id: "yonago-tumble",
    area: "鳥取",
    name: "米子タンブ体操教室",
    day: "日曜・木曜（月3回）",
    venue: "米子市産業体育館",
    defaultRate: 1200,
    classes: [
      { name: "スタート", time: "未設定" },
      { name: "ステップアップ", time: "未設定" },
      { name: "アクロバット", time: "未設定" },
    ],
  },
  {
    id: "matsue-gymnastics",
    area: "島根",
    name: "松江タンブ体操教室",
    day: "土曜（月3回）",
    venue: "サンライフ松江 多目的室",
    defaultRate: 1200,
    classes: [
      { name: "A", time: "16:30-17:30" },
      { name: "B", time: "17:40-18:40" },
    ],
  },
{
    id: "aki-acro",
    area: "高知",
    name: "安芸スカイアクロ体操教室",
    day: "水曜（月3回）",
    venue: "安芸市第一小学校 体育館",
    defaultRate: 1200,
    classes: [
      { name: "A", time: "17:20-18:20" },
      { name: "B", time: "18:30-19:30" },
    ],
  },
  {
    id: "fukuyama-acro",
    area: "広島",
    name: "福山アクロ体操教室",
    day: "日曜（月3回）",
    venue: "福山市エフピコアリーナ スタジオ室",
    defaultRate: 1200,
    classes: [
      { name: "A", time: "10:00-11:00" },
      { name: "B", time: "11:10-12:10" },
    ],
  },
  {
    id: "showacho-fry",
    area: "徳島",
    name: "昭和町 Fry体操教室",
    day: "月曜（月3回）",
    venue: "昭和町コミュニティセンター",
    defaultRate: 1200,
    classes: [
      { name: "A", time: "18:10-19:10" },
      { name: "B", time: "19:20-20:20" },
    ],
  },
  {
    id: "komatsushima-fresh",
    area: "徳島",
    name: "小松島フレッシュ体操クラブ",
    day: "木曜（月3回）",
    venue: "小松島市立体育館 武道館",
    defaultRate: 1200,
    classes: [
      { name: "ジュニア", time: "19:00-20:00" },
      { name: "バク転集中", time: "20:00-21:00" },
    ],
  },
  {
    id: "kamiita-fresh",
    area: "徳島",
    name: "上板フレッシュ体操教室",
    day: "日曜（月3回）",
    venue: "東光小学校 体育館",
    defaultRate: 1200,
    classes: [
      { name: "A", time: "10:20-11:20" },
      { name: "B", time: "11:30-12:30" },
      { name: "バク転集中", time: "13:00-14:00" },
    ],
  },
  {
    id: "hombu-ronden",
    area: "徳島",
    name: "本部論田教室",
    day: "土曜",
    venue: "論田B&G武道館",
    defaultRate: 1200,
    classes: [
      { name: "A", time: "10:30-11:30" },
      { name: "B", time: "11:45-12:45" },
      { name: "C", time: "13:00-14:00" },
      { name: "AC", time: "14:15-15:30" },
    ],
  },
  {
    id: "hombu-kitajima",
    area: "徳島",
    name: "本部北島教室",
    day: "火曜",
    venue: "サンライフ北島",
    defaultRate: 1200,
    classes: [
      { name: "ST", time: "16:00-16:50" },
      { name: "A", time: "17:00-18:00" },
      { name: "B", time: "18:10-19:10" },
    ],
  },
  {
    id: "hombu-anan",
    area: "徳島",
    name: "本部阿南教室",
    day: "水曜",
    venue: "阿南B&G",
    defaultRate: 1200,
    classes: [
      { name: "ST", time: "16:00-16:50" },
      { name: "A", time: "17:00-18:00" },
      { name: "B", time: "18:10-19:10" },
    ],
  },
  {
    id: "hombu-yoshinogawa",
    area: "徳島",
    name: "本部吉野川教室",
    day: "金曜",
    venue: "吉野川市交流センター",
    defaultRate: 1200,
    classes: [
      { name: "ST", time: "16:00-16:50" },
      { name: "A", time: "17:00-18:00" },
      { name: "B", time: "18:10-19:10" },
    ],
  },
];

function yen(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function uniqueId() {
  return `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function safeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function getSchoolById(id) {
  return schools.find((school) => school.id === id) || schools[0];
}

function getMonthStart(targetMonth) {
  const [year, month] = targetMonth.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatJapaneseDate(dateText) {
  const [, month, day] = dateText.split("-");
  return `${Number(month)}/${Number(day)}`;
}

function addMonths(monthText, diff) {
  const [year, month] = monthText.split("-").map(Number);
  const date = new Date(year, month - 1 + diff, 1);
  const nextYear = date.getFullYear();
  const nextMonth = String(date.getMonth() + 1).padStart(2, "0");
  return `${nextYear}-${nextMonth}`;
}

function buildCalendarDays(targetMonth) {
  const start = getMonthStart(targetMonth);
  const year = start.getFullYear();
  const monthIndex = start.getMonth();
  const firstWeekday = start.getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstWeekday; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(formatDate(new Date(year, monthIndex, day)));
  while (cells.length % 7 !== 0) cells.push(null);

  return cells;
}

function toggleDate(dates, date) {
  if (dates.includes(date)) return dates.filter((item) => item !== date);
  return [...dates, date].sort();
}

function makeWorkRow(rate, workDetail = "Aクラス メイン") {
  return {
    id: uniqueId(),
    dates: [],
    workDetail,
    rate,
    memo: "",
  };
}

function makePerson(rate, name = "") {
  return {
    id: uniqueId(),
    name,
    works: [makeWorkRow(rate)],
  };
}

function makeExpenseRow() {
  return {
    id: uniqueId(),
    applicant: "",
    item: "",
    quantity: 1,
    amount: "",
    memo: "",
  };
}

function personSubtotal(person) {
  return person.works.reduce((sum, work) => sum + work.dates.length * safeNumber(work.rate), 0);
}

function personWorkDays(person) {
  return person.works.reduce((sum, work) => sum + work.dates.length, 0);
}


function runSelfTests() {
  const tests = [
    { name: "教室IDから教室を取得できる", actual: getSchoolById("hombu-ronden").name, expected: "本部論田教室" },
    { name: "存在しない教室IDは先頭教室にフォールバックする", actual: getSchoolById("missing-school").id, expected: schools[0].id },
    { name: "日付を追加できる", actual: toggleDate([], "2026-05-01").join(","), expected: "2026-05-01" },
    { name: "日付を再タップすると解除できる", actual: toggleDate(["2026-05-01"], "2026-05-01").length, expected: 0 },
    { name: "翌月に移動できる", actual: addMonths("2026-05", 1), expected: "2026-06" },
    { name: "前月に移動できる", actual: addMonths("2026-01", -1), expected: "2025-12" },
    { name: "人物別小計を計算できる", actual: personSubtotal({ works: [{ dates: ["2026-05-01", "2026-05-08"], rate: 1200 }] }), expected: 2400 },
    { name: "経費行の初期数量は1", actual: makeExpenseRow().quantity, expected: 1 },
  ];

  tests.forEach((test) => {
    if (test.actual !== test.expected) {
      console.error(`Self test failed: ${test.name}`, test);
    }
  });
}

runSelfTests();

function FieldLabel({ children }) {
  return <label className="text-sm font-bold text-slate-700">{children}</label>;
}

function TextInput(props) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50 ${props.className || ""}`}
    />
  );
}

function TextAreaInput(props) {
  return (
    <textarea
      {...props}
      className={`w-full min-h-24 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50 ${props.className || ""}`}
    />
  );
}

function SelectInput({ value, onChange, children }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
    >
      {children}
    </select>
  );
}

function Card({ children, className = "" }) {
  return <div className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Button({ children, onClick, variant = "primary", disabled = false, className = "", type = "button" }) {
  const base = "inline-flex min-h-12 items-center justify-center rounded-2xl px-4 py-3 text-base font-bold transition disabled:cursor-not-allowed disabled:opacity-40";
  const styles =
    variant === "outline"
      ? "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50"
      : variant === "ghost"
        ? "bg-white text-slate-500 hover:bg-red-50 hover:text-red-600"
        : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

function DateCalendar({ displayMonth, selectedDates, onToggle, onPrevMonth, onNextMonth }) {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const days = buildCalendarDays(displayMonth);
  const [year, month] = displayMonth.split("-");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="mb-3 grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-2xl bg-blue-50 px-2 py-2 text-base font-bold text-slate-800">
        <button type="button" onClick={onPrevMonth} className="rounded-xl bg-white px-3 py-2 text-sm font-bold text-blue-700 shadow-sm">前月</button>
        <div className="text-center">{year}年{Number(month)}月</div>
        <button type="button" onClick={onNextMonth} className="rounded-xl bg-white px-3 py-2 text-sm font-bold text-blue-700 shadow-sm">次月</button>
      </div>
      <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-500">
        {weekdays.map((weekday) => <div key={weekday}>{weekday}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => {
          if (!date) return <div key={`empty-${index}`} className="h-11" />;
          const day = Number(date.slice(-2));
          const selected = selectedDates.includes(date);
          return (
            <button
              key={date}
              type="button"
              onClick={() => onToggle(date)}
              className={`h-11 rounded-2xl text-base transition ${selected ? "bg-blue-600 font-bold text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-orange-50"}`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function InvoiceGeneratorApp() {
  const firstSchool = schools[0];
  const firstClass = firstSchool.classes[0];

  const [schoolId, setSchoolId] = useState(firstSchool.id);
  const school = getSchoolById(schoolId);
  const recipient = "Sowers株式会社";

  const [invoiceDate, setInvoiceDate] = useState(todayString());
  const [targetMonth, setTargetMonth] = useState(todayString().slice(0, 7));
  const [issuer, setIssuer] = useState("");
  const [invoiceNo, setInvoiceNo] = useState(`SW-${todayString().split("-").join("")}`);
  const [bankInfo, setBankInfo] = useState("");
  const [notes, setNotes] = useState("");
  const [people, setPeople] = useState([makePerson(firstSchool.defaultRate, "")]);
  const [activePersonId, setActivePersonId] = useState(null);
  const [openCalendarKey, setOpenCalendarKey] = useState(null);
  const [calendarMonth, setCalendarMonth] = useState(todayString().slice(0, 7));
  const [expenses, setExpenses] = useState([makeExpenseRow()]);

  const actualActivePersonId = activePersonId || people[0]?.id;
  const activePerson = people.find((person) => person.id === actualActivePersonId) || people[0];

  const totals = useMemo(() => {
    const workTotal = people.reduce((sum, person) => sum + personSubtotal(person), 0);
    const totalWorkDays = people.reduce((sum, person) => sum + personWorkDays(person), 0);
    const expenseTotal = expenses.reduce((sum, expense) => sum + safeNumber(expense.quantity) * safeNumber(expense.amount), 0);
    return { workTotal, totalWorkDays, expenseTotal, total: workTotal + expenseTotal };
  }, [people, expenses]);

  const updatePerson = (personId, key, value) => {
    setPeople((prev) => prev.map((person) => (person.id === personId ? { ...person, [key]: value } : person)));
  };

  const updateWork = (personId, workId, key, value) => {
    setPeople((prev) =>
      prev.map((person) =>
        person.id === personId
          ? {
              ...person,
              works: person.works.map((work) => (work.id === workId ? { ...work, [key]: value } : work)),
            }
          : person
      )
    );
  };

  const addPerson = () => {
    const defaultClassName = school.classes[0]?.name || firstClass.name;
    const nextPerson = makePerson(school.defaultRate, "");
    nextPerson.works = [makeWorkRow(school.defaultRate, `${defaultClassName}クラス メイン`)];
    setPeople((prev) => [...prev, nextPerson]);
    setActivePersonId(nextPerson.id);
  };

  const removePerson = (personId) => {
    setPeople((prev) => {
      if (prev.length === 1) return prev;
      const next = prev.filter((person) => person.id !== personId);
      if (actualActivePersonId === personId) setActivePersonId(next[0]?.id || null);
      return next;
    });
  };

  const addWork = (personId) => {
    const defaultClassName = school.classes[0]?.name || firstClass.name;
    setPeople((prev) =>
      prev.map((person) =>
        person.id === personId
          ? { ...person, works: [...person.works, makeWorkRow(school.defaultRate, `${defaultClassName}クラス メイン`)] }
          : person
      )
    );
  };

  const removeWork = (personId, workId) => {
    setPeople((prev) =>
      prev.map((person) =>
        person.id === personId
          ? { ...person, works: person.works.length === 1 ? person.works : person.works.filter((work) => work.id !== workId) }
          : person
      )
    );
  };

  const updateExpense = (id, key, value) => {
    setExpenses((prev) => prev.map((row) => (row.id === id ? { ...row, [key]: value } : row)));
  };

  const addExpense = () => setExpenses((prev) => [...prev, makeExpenseRow()]);
  const removeExpense = (id) => setExpenses((prev) => (prev.length === 1 ? prev : prev.filter((row) => row.id !== id)));

  const handleSchoolChange = (id) => {
    const nextSchool = getSchoolById(id);
    const nextClassName = nextSchool.classes[0]?.name || firstClass.name;
    setSchoolId(nextSchool.id);
    setPeople([makePerson(nextSchool.defaultRate, "")]);
    setPeople([{ ...makePerson(nextSchool.defaultRate, ""), works: [makeWorkRow(nextSchool.defaultRate, `${nextClassName}クラス メイン`)] }]);
    setActivePersonId(null);
    setOpenCalendarKey(null);
  };

  const resetForm = () => {
    const defaultClassName = school.classes[0]?.name || firstClass.name;
    setPeople([{ ...makePerson(school.defaultRate, ""), works: [makeWorkRow(school.defaultRate, `${defaultClassName}クラス メイン`)] }]);
    setExpenses([makeExpenseRow()]);
    setIssuer("");
    setBankInfo("");
    setNotes("");
    setActivePersonId(null);
    setOpenCalendarKey(null);
  };

  const printInvoice = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 p-3 text-slate-900 sm:p-4 md:p-8 print:bg-white print:p-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_560px] print:block">
        <section className="space-y-4 print:hidden">
          <div className="space-y-3">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-700 ring-1 ring-blue-100">
                <FileText className="h-3.5 w-3.5" /> Sowers Franchise System
              </div>
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="mb-4 h-2 w-24 rounded-full bg-orange-500" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">Invoice Creator</p>
                <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl">請求書作成</h1>
                <p className="mt-2 text-sm leading-6 text-slate-600">人物ごとに出勤情報をまとめ、最後に経費を追加できます。</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button variant="outline" onClick={resetForm} className="w-full">入力リセット</Button>
              <Button onClick={printInvoice} className="w-full"><Printer className="mr-1 h-4 w-4" />PDF保存・印刷</Button>
            </div>
          </div>

          <Card>
            <div className="space-y-4 p-4 md:p-5">
              <div className="h-1.5 w-20 rounded-full bg-blue-600" />
              <h2 className="text-lg font-black text-slate-900">1. 基本情報</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <FieldLabel>教室名</FieldLabel>
                  <SelectInput value={schoolId} onChange={handleSchoolChange}>
                    {schools.map((item) => (
                      <option key={item.id} value={item.id}>{item.area}｜{item.name}</option>
                    ))}
                  </SelectInput>
                </div>
                <div className="space-y-2">
                  <FieldLabel>対象月</FieldLabel>
                  <TextInput type="month" value={targetMonth} onChange={(event) => setTargetMonth(event.target.value)} />
                </div>
                <div className="space-y-2">
                  <FieldLabel>請求日</FieldLabel>
                  <TextInput type="date" value={invoiceDate} onChange={(event) => setInvoiceDate(event.target.value)} />
                </div>
                <div className="space-y-2">
                  <FieldLabel>請求書番号</FieldLabel>
                  <TextInput value={invoiceNo} onChange={(event) => setInvoiceNo(event.target.value)} />
                </div>
                <div className="space-y-2">
                  <FieldLabel>宛名</FieldLabel>
                  <TextInput value={recipient} readOnly className="bg-slate-100" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <FieldLabel>請求者名</FieldLabel>
                  <TextInput value={issuer} onChange={(event) => setIssuer(event.target.value)} placeholder="例：〇〇体操教室　代表 〇〇〇〇" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <FieldLabel>振込先</FieldLabel>
                  <TextAreaInput value={bankInfo} onChange={(event) => setBankInfo(event.target.value)} placeholder="例：〇〇銀行 〇〇支店 普通 1234567 〇〇〇〇" />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-4 p-4 md:p-5">
              <div className="grid grid-cols-1 gap-3 sm:flex sm:items-center sm:justify-between">
                <div>
                  <div className="h-1.5 w-20 rounded-full bg-orange-500" />
                  <h2 className="text-lg font-black text-slate-900">2. 人物ごとの出勤情報</h2>
                  <p className="mt-1 text-xs text-slate-500">名前を選んで、その人が担当したクラス・業務を追加してください。</p>
                </div>
                <Button onClick={addPerson} className="w-full sm:w-auto"><UserPlus className="mr-1 h-4 w-4" />人物を追加</Button>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1">
                {people.map((person, index) => {
                  const isActive = person.id === actualActivePersonId;
                  return (
                    <button
                      key={person.id}
                      type="button"
                      onClick={() => setActivePersonId(person.id)}
                      className={`shrink-0 rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${isActive ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50"}`}
                    >
                      {person.name || `人物${index + 1}`}
                    </button>
                  );
                })}
              </div>

              {activePerson && (
                <div className="space-y-4 rounded-3xl border border-orange-200 bg-white p-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="space-y-1">
                      <FieldLabel>氏名（フルネーム）</FieldLabel>
                      <TextInput value={activePerson.name} onChange={(event) => updatePerson(activePerson.id, "name", event.target.value)} placeholder="例：沢野 太郎" />
                    </div>
                    <Button variant="ghost" onClick={() => removePerson(activePerson.id)} disabled={people.length === 1} className="w-full sm:w-auto">
                      <Trash2 className="mr-1 h-4 w-4" />この人物を削除
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {activePerson.works.map((work, workIndex) => {
                      const calendarKey = `${activePerson.id}-${work.id}`;
                      const isCalendarOpen = openCalendarKey === calendarKey;
                      const workDays = work.dates.length;
                      const amount = workDays * safeNumber(work.rate);

                      return (
                        <div key={work.id} className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-bold">担当業務 {workIndex + 1}</p>
                            <Button variant="ghost" onClick={() => removeWork(activePerson.id, work.id)} disabled={activePerson.works.length === 1} className="min-h-10 px-3 py-2 text-sm">
                              <Trash2 className="mr-1 h-4 w-4" />削除
                            </Button>
                          </div>

                          <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
                            <div className="space-y-1 md:col-span-2">
                              <FieldLabel>担当したクラス・業務名</FieldLabel>
                              <TextInput value={work.workDetail} onChange={(event) => updateWork(activePerson.id, work.id, "workDetail", event.target.value)} placeholder="例：Aクラス メイン" />
                            </div>

                            <div className="space-y-1 md:col-span-2">
                              <FieldLabel>出勤日</FieldLabel>
                              <button
                                type="button"
                                onClick={() => setOpenCalendarKey(isCalendarOpen ? null : calendarKey)}
                                className="flex min-h-14 w-full items-center justify-between gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-left text-base outline-none hover:bg-slate-50"
                              >
                                <span className={work.dates.length ? "text-slate-900" : "text-slate-400"}>
                                  {work.dates.length ? work.dates.map(formatJapaneseDate).join("、") : "タップして日付を選択"}
                                </span>
                                <CalendarDays className="h-5 w-5 shrink-0 text-slate-500" />
                              </button>
                            </div>

                            <div className="space-y-1">
                              <FieldLabel>1日単価</FieldLabel>
                              <TextInput type="number" value={work.rate} onChange={(event) => updateWork(activePerson.id, work.id, "rate", event.target.value)} />
                            </div>


                            {isCalendarOpen && (
                              <div className="md:col-span-6">
                                <DateCalendar
                                  displayMonth={calendarMonth}
                                  selectedDates={work.dates}
                                  onToggle={(date) => updateWork(activePerson.id, work.id, "dates", toggleDate(work.dates, date))}
                                  onPrevMonth={() => setCalendarMonth((current) => addMonths(current, -1))}
                                  onNextMonth={() => setCalendarMonth((current) => addMonths(current, 1))}
                                />
                              </div>
                            )}

                            <div className="space-y-1 md:col-span-6">
                              <FieldLabel>備考</FieldLabel>
                              <TextInput value={work.memo} onChange={(event) => updateWork(activePerson.id, work.id, "memo", event.target.value)} placeholder="任意" />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white px-4 py-3 text-sm sm:grid-cols-2">
                            <span>出勤日数：<b>{workDays}日</b></span>
                            <span>小計：<b>{yen(amount)}</b></span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Button onClick={() => addWork(activePerson.id)} variant="outline" className="w-full">
                    <Plus className="mr-1 h-4 w-4" />この人物に担当業務を追加
                  </Button>

                  <div className="rounded-3xl bg-blue-600 p-4 text-white">
                    <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                      <span>人物別出勤日数：<b>{personWorkDays(activePerson)}日</b></span>
                      <span>人物別合計：<b>{yen(personSubtotal(activePerson))}</b></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card>
            <div className="space-y-4 p-4 md:p-5">
              <div className="grid grid-cols-1 gap-3 sm:flex sm:items-center sm:justify-between">
                <div className="h-1.5 w-20 rounded-full bg-emerald-500" />
                <h2 className="text-lg font-black text-slate-900">3. 経費</h2>
                <Button onClick={addExpense} className="w-full sm:w-auto"><Plus className="mr-1 h-4 w-4" />経費を追加</Button>
              </div>

              <div className="space-y-3">
                {expenses.map((expense, index) => {
                  const expenseSubtotal = safeNumber(expense.quantity) * safeNumber(expense.amount);
                  return (
                    <div key={expense.id} className="space-y-3 rounded-3xl border border-emerald-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold">経費 {index + 1}</p>
                        <Button variant="ghost" onClick={() => removeExpense(expense.id)} disabled={expenses.length === 1} className="min-h-10 px-3 py-2 text-sm">
                          <Trash2 className="mr-1 h-4 w-4" />削除
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
                        <div className="space-y-1 md:col-span-2">
                          <FieldLabel>申請者</FieldLabel>
                          <TextInput value={expense.applicant} onChange={(event) => updateExpense(expense.id, "applicant", event.target.value)} placeholder="例：沢野 太郎" />
                        </div>
                        <div className="space-y-1 md:col-span-2">
                          <FieldLabel>経費の項目</FieldLabel>
                          <TextInput value={expense.item} onChange={(event) => updateExpense(expense.id, "item", event.target.value)} placeholder="例：○○体育館（11:00-14:00）" />
                        </div>
                        <div className="space-y-1">
                          <FieldLabel>数量</FieldLabel>
                          <TextInput type="number" value={expense.quantity} onChange={(event) => updateExpense(expense.id, "quantity", event.target.value)} />
                        </div>
                        <div className="space-y-1">
                          <FieldLabel>金額</FieldLabel>
                          <TextInput type="number" step="10" value={expense.amount} onChange={(event) => updateExpense(expense.id, "amount", event.target.value)} placeholder="例：1000" />
                        </div>
                        <div className="space-y-1 md:col-span-2">
                          <FieldLabel>備考</FieldLabel>
                          <TextInput value={expense.memo} onChange={(event) => updateExpense(expense.id, "memo", event.target.value)} placeholder="任意" />
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right text-sm">小計：<b>{yen(expenseSubtotal)}</b></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-3 p-4 md:p-5">
              <div className="h-1.5 w-20 rounded-full bg-slate-400" />
              <h2 className="text-lg font-black text-slate-900">4. 備考</h2>
              <TextAreaInput value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="必要な場合のみ入力" />
            </div>
          </Card>
        </section>

        <section className="space-y-4 print:space-y-0">
          <Card className="print:rounded-none print:shadow-none">
            <div className="p-4 md:p-8 print:p-0">
              <div className="mb-6 border-b-2 border-blue-600 pb-4">
                <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-blue-600">Sowers Franchise System</p>
                <h2 className="mt-1 text-center text-2xl font-black tracking-[0.25em] text-slate-900 md:text-3xl">請求書</h2>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-5 text-sm md:grid-cols-2">
                <div className="space-y-3">
                  <div>
                    <p className="inline-block border-b border-slate-400 pb-1 pr-8 text-lg font-bold">{recipient}</p>
                    <p className="mt-3">下記の通りご請求申し上げます。</p>
                  </div>
                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5 print:border print:bg-white print:text-slate-900">
                    <p className="text-xs font-bold text-blue-600 print:text-slate-600">ご請求金額</p>
                    <p className="text-4xl font-black text-slate-900">{yen(totals.total)}</p>
                  </div>
                </div>
                <div className="space-y-1 text-left md:text-right">
                  <p>請求書番号：{invoiceNo}</p>
                  <p>請求日：{invoiceDate}</p>
                  <p>対象月：{targetMonth}</p>
                  <div className="pt-3"><p className="whitespace-pre-wrap font-bold">{issuer || "請求者名未入力"}</p></div>
                </div>
              </div>

              <div className="mb-5 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                <p><span className="text-slate-500">教室名：</span>{school.name}</p>
                <p><span className="text-slate-500">エリア：</span>{school.area}</p>
                <p><span className="text-slate-500">曜日：</span>{school.day}</p>
                <p><span className="text-slate-500">会場：</span>{school.venue}</p>
              </div>

              <p className="mb-2 text-sm font-bold">人物別出勤情報</p>
              <div className="space-y-5">
                {people.map((person, personIndex) => (
                  <div key={person.id} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <p className="font-bold">{person.name || `人物${personIndex + 1}`}</p>
                      <p className="text-sm font-bold">人物別合計：{yen(personSubtotal(person))}</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[720px] border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-50 print:bg-white">
                            <th className="border border-slate-400 p-2 text-left">日付</th>
                            <th className="border border-slate-400 p-2 text-left">クラス・業務</th>
                            <th className="border border-slate-400 p-2 text-center">日数</th>
                            <th className="border border-slate-400 p-2 text-right">単価</th>
                            <th className="border border-slate-400 p-2 text-left">備考</th>
                            <th className="border border-slate-400 p-2 text-right">金額</th>
                          </tr>
                        </thead>
                        <tbody>
                          {person.works.map((work) => {
                            const workDays = work.dates.length;
                            const amount = workDays * safeNumber(work.rate);
                            return (
                              <tr key={work.id}>
                                <td className="whitespace-pre-wrap border border-slate-300 p-2">{work.dates.length ? work.dates.join("\n") : "未選択"}</td>
                                <td className="border border-slate-300 p-2">{work.workDetail}</td>
                                <td className="border border-slate-300 p-2 text-center">{workDays}日</td>
                                <td className="border border-slate-300 p-2 text-right">{yen(work.rate)}</td>
                                <td className="border border-slate-300 p-2">{work.memo || "-"}</td>
                                <td className="border border-slate-300 p-2 text-right">{yen(amount)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mb-2 mt-5 text-sm font-bold">経費</p>
              <div className="overflow-x-auto">
                <table className="mb-5 w-full min-w-[620px] border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 print:bg-white">
                      <th className="border border-slate-400 p-2 text-left">申請者</th>
                      <th className="border border-slate-400 p-2 text-left">経費の項目</th>
                      <th className="border border-slate-400 p-2 text-center">数量</th>
                      <th className="border border-slate-400 p-2 text-right">金額</th>
                      <th className="border border-slate-400 p-2 text-left">備考</th>
                      <th className="border border-slate-400 p-2 text-right">小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((expense) => {
                      const expenseSubtotal = safeNumber(expense.quantity) * safeNumber(expense.amount);
                      return (
                        <tr key={expense.id}>
                          <td className="border border-slate-300 p-2">{expense.applicant || "未入力"}</td>
                          <td className="border border-slate-300 p-2">{expense.item || "未入力"}</td>
                          <td className="border border-slate-300 p-2 text-center">{expense.quantity || 0}</td>
                          <td className="border border-slate-300 p-2 text-right">{yen(expense.amount)}</td>
                          <td className="border border-slate-300 p-2">{expense.memo || "-"}</td>
                          <td className="border border-slate-300 p-2 text-right">{yen(expenseSubtotal)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mb-6 flex justify-end">
                <table className="w-full max-w-sm border-collapse text-sm">
                  <tbody>
                    <tr><td className="border border-slate-400 p-2">合計出勤日数</td><td className="border border-slate-400 p-2 text-right">{totals.totalWorkDays}日</td></tr>
                    <tr><td className="border border-slate-400 p-2">出勤小計</td><td className="border border-slate-400 p-2 text-right">{yen(totals.workTotal)}</td></tr>
                    <tr><td className="border border-slate-400 p-2">経費小計</td><td className="border border-slate-400 p-2 text-right">{yen(totals.expenseTotal)}</td></tr>
                    <tr><td className="border border-slate-400 p-2 font-bold">合計金額</td><td className="border border-slate-400 p-2 text-right font-bold">{yen(totals.total)}</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-4 text-sm">
                <div><p className="mb-1 font-bold">振込先</p><div className="min-h-16 whitespace-pre-wrap rounded-lg border p-3">{bankInfo || "未入力"}</div></div>
                <div><p className="mb-1 font-bold">備考</p><div className="min-h-12 whitespace-pre-wrap rounded-lg border p-3">{notes || "-"}</div></div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
