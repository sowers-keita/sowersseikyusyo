import React, { useMemo, useState } from "react";
import { Plus, Trash2, Printer, FileText, CalendarDays } from "lucide-react";

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
    id: "iwanuma-acro",
    area: "宮城",
    name: "岩沼アクロ体操教室",
    day: "月曜（月3回）",
    venue: "岩沼西コミュニティセンター",
    defaultRate: 1200,
    classes: [
      { name: "A", time: "16:10-17:10" },
      { name: "B", time: "17:20-18:20" },
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
  return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 }).format(Number(value || 0));
}
function todayString() { return new Date().toISOString().slice(0, 10); }
function uniqueId() { return `row-${Date.now()}-${Math.random().toString(36).slice(2)}`; }
function safeNumber(value) { const number = Number(value); return Number.isFinite(number) ? number : 0; }
function getSchoolById(id) { return schools.find((school) => school.id === id) || schools[0]; }
function getMonthStart(targetMonth) { const [year, month] = targetMonth.split("-").map(Number); return new Date(year, month - 1, 1); }
function formatDate(date) { const year = date.getFullYear(); const month = String(date.getMonth() + 1).padStart(2, "0"); const day = String(date.getDate()).padStart(2, "0"); return `${year}-${month}-${day}`; }
function formatJapaneseDate(dateText) { const [, month, day] = dateText.split("-"); return `${Number(month)}/${Number(day)}`; }
function addMonths(monthText, diff) { const [year, month] = monthText.split("-").map(Number); const date = new Date(year, month - 1 + diff, 1); return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`; }

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

function makeRow(rate, workDetail = "Aクラス メイン") {
  return { id: uniqueId(), staff: "", dates: [], workDetail, studentCount: "", rate, memo: "" };
}

function makeExpenseRow() {
  return { id: uniqueId(), item: "", quantity: 1, amount: "", memo: "" };
}

function FieldLabel({ children }) {
  return <label className="field-label">{children}</label>;
}

function TextInput(props) {
  return <input {...props} className={`text-input ${props.className || ""}`} />;
}

function TextAreaInput(props) {
  return <textarea {...props} className={`text-area-input ${props.className || ""}`} />;
}

function SelectInput({ value, onChange, children }) {
  return <select value={value} onChange={(event) => onChange(event.target.value)} className="select-input">{children}</select>;
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function Button({ children, onClick, variant = "primary", disabled = false, className = "", type = "button" }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`button button-${variant} ${className}`}>
      {children}
    </button>
  );
}

function DateCalendar({ displayMonth, selectedDates, onToggle, onPrevMonth, onNextMonth }) {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const days = buildCalendarDays(displayMonth);
  const [year, month] = displayMonth.split("-");

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button type="button" onClick={onPrevMonth} className="calendar-nav">前月</button>
        <div className="calendar-title">{year}年{Number(month)}月</div>
        <button type="button" onClick={onNextMonth} className="calendar-nav">次月</button>
      </div>
      <div className="calendar-weekdays">
        {weekdays.map((weekday) => <div key={weekday}>{weekday}</div>)}
      </div>
      <div className="calendar-grid">
        {days.map((date, index) => {
          if (!date) return <div key={`empty-${index}`} className="calendar-empty" />;
          const day = Number(date.slice(-2));
          const selected = selectedDates.includes(date);
          return (
            <button key={date} type="button" onClick={() => onToggle(date)} className={`calendar-day ${selected ? "calendar-day-selected" : ""}`}>
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SummaryBox({ totals }) {
  return (
    <div className="sticky-summary">
      <div>
        <div className="summary-label">ご請求金額</div>
        <div className="summary-total">{yen(totals.total)}</div>
      </div>
      <div className="summary-mini">
        <span>{totals.totalWorkDays}日</span>
        <span>{totals.totalStudents}名</span>
      </div>
    </div>
  );
}

export default function App() {
  const firstSchool = schools[0];
  const firstClass = firstSchool.classes[0];

  const [schoolId, setSchoolId] = useState(firstSchool.id);
  const school = getSchoolById(schoolId);
  const [invoiceDate, setInvoiceDate] = useState(todayString());
  const [targetMonth, setTargetMonth] = useState(todayString().slice(0, 7));
  const recipient = "Sowers株式会社";
  const [issuer, setIssuer] = useState("");
  const [invoiceNo, setInvoiceNo] = useState(`SW-${todayString().split("-").join("")}`);
  const [bankInfo, setBankInfo] = useState("");
  const [notes, setNotes] = useState("");
  const [rows, setRows] = useState([makeRow(firstSchool.defaultRate, `${firstClass.name}クラス メイン`)]);
  const [openCalendarRowId, setOpenCalendarRowId] = useState(null);
  const [calendarMonth, setCalendarMonth] = useState(todayString().slice(0, 7));
  const [expenses, setExpenses] = useState([makeExpenseRow()]);

  const totals = useMemo(() => {
    const totalWorkDays = rows.reduce((sum, row) => sum + row.dates.length, 0);
    const totalStudents = rows.reduce((sum, row) => sum + safeNumber(row.studentCount), 0);
    const workTotal = rows.reduce((sum, row) => sum + row.dates.length * safeNumber(row.rate), 0);
    const expenseTotal = expenses.reduce((sum, expense) => sum + safeNumber(expense.quantity) * safeNumber(expense.amount), 0);
    return { totalWorkDays, totalStudents, workTotal, expenseTotal, total: workTotal + expenseTotal };
  }, [rows, expenses]);

  const updateRow = (id, key, value) => setRows((prev) => prev.map((row) => (row.id === id ? { ...row, [key]: value } : row)));
  const updateExpense = (id, key, value) => setExpenses((prev) => prev.map((row) => (row.id === id ? { ...row, [key]: value } : row)));

  const addRow = () => {
    const defaultClassName = school.classes[0]?.name || "A";
    setRows((prev) => [...prev, makeRow(school.defaultRate, `${defaultClassName}クラス メイン`)]);
  };
  const removeRow = (id) => setRows((prev) => (prev.length === 1 ? prev : prev.filter((row) => row.id !== id)));
  const addExpense = () => setExpenses((prev) => [...prev, makeExpenseRow()]);
  const removeExpense = (id) => setExpenses((prev) => (prev.length === 1 ? prev : prev.filter((row) => row.id !== id)));

  const handleSchoolChange = (id) => {
    const nextSchool = getSchoolById(id);
    const nextClassName = nextSchool.classes[0]?.name || "A";
    setSchoolId(nextSchool.id);
    setRows([makeRow(nextSchool.defaultRate, `${nextClassName}クラス メイン`)]);
    setOpenCalendarRowId(null);
  };

  const resetForm = () => {
    const defaultClassName = school.classes[0]?.name || "A";
    setRows([makeRow(school.defaultRate, `${defaultClassName}クラス メイン`)]);
    setExpenses([makeExpenseRow()]);
    setIssuer("");
    setBankInfo("");
    setNotes("");
    setOpenCalendarRowId(null);
  };

  return (
    <div className="app">
      <div className="app-layout">
        <section className="input-section print-hidden">
          <div className="header">
            <div className="badge"><FileText size={14} /> Sowers Invoice Generator</div>
            <h1>体操教室 請求書作成アプリ</h1>
            <p>スマホから出勤情報と経費を入力できます。下の請求書プレビューに自動反映されます。</p>
            <div className="action-grid">
              <Button variant="outline" onClick={resetForm}>入力リセット</Button>
              <Button onClick={() => window.print()}><Printer size={18} /> PDF保存・印刷</Button>
            </div>
          </div>

          <SummaryBox totals={totals} />

          <Card>
            <div className="card-inner">
              <h2>1. 基本情報</h2>
              <div className="form-grid">
                <div className="field field-full">
                  <FieldLabel>教室名</FieldLabel>
                  <SelectInput value={schoolId} onChange={handleSchoolChange}>
                    {schools.map((item) => <option key={item.id} value={item.id}>{item.area}｜{item.name}</option>)}
                  </SelectInput>
                </div>
                <div className="field"><FieldLabel>対象月</FieldLabel><TextInput type="month" value={targetMonth} onChange={(e) => setTargetMonth(e.target.value)} /></div>
                <div className="field"><FieldLabel>請求日</FieldLabel><TextInput type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} /></div>
                <div className="field"><FieldLabel>請求書番号</FieldLabel><TextInput value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} /></div>
                <div className="field"><FieldLabel>宛名</FieldLabel><TextInput value={recipient} readOnly className="readonly" /></div>
                <div className="field field-full"><FieldLabel>請求者名</FieldLabel><TextInput value={issuer} onChange={(e) => setIssuer(e.target.value)} placeholder="例：〇〇体操教室　代表 〇〇〇〇" /></div>
                <div className="field field-full"><FieldLabel>振込先</FieldLabel><TextAreaInput value={bankInfo} onChange={(e) => setBankInfo(e.target.value)} placeholder="例：〇〇銀行 〇〇支店 普通 1234567 〇〇〇〇" /></div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="card-inner">
              <div className="section-title-row">
                <h2>2. 出勤情報</h2>
                <Button onClick={addRow}><Plus size={18} /> 行を追加</Button>
              </div>

              <div className="stack">
                {rows.map((row, index) => {
                  const workDays = row.dates.length;
                  const amount = workDays * safeNumber(row.rate);
                  const isCalendarOpen = openCalendarRowId === row.id;

                  return (
                    <div key={row.id} className="entry-card">
                      <div className="entry-head">
                        <strong>出勤情報 {index + 1}</strong>
                        <Button variant="ghost" onClick={() => removeRow(row.id)} disabled={rows.length === 1}><Trash2 size={16} /> 削除</Button>
                      </div>
                      <div className="form-grid">
                        <div className="field"><FieldLabel>氏名（フルネーム）</FieldLabel><TextInput value={row.staff} onChange={(e) => updateRow(row.id, "staff", e.target.value)} placeholder="例：沢野 太郎" /></div>
                        <div className="field"><FieldLabel>各クラス・業務</FieldLabel><TextInput value={row.workDetail} onChange={(e) => updateRow(row.id, "workDetail", e.target.value)} placeholder="例：Aクラス メイン" /></div>
                        <div className="field field-full">
                          <FieldLabel>出勤日</FieldLabel>
                          <button type="button" onClick={() => setOpenCalendarRowId(isCalendarOpen ? null : row.id)} className="date-button">
                            <span className={row.dates.length ? "" : "placeholder"}>{row.dates.length ? row.dates.map(formatJapaneseDate).join("、") : "タップして日付を選択"}</span>
                            <CalendarDays size={20} />
                          </button>
                        </div>
                        {isCalendarOpen && (
                          <div className="field-full">
                            <DateCalendar
                              displayMonth={calendarMonth}
                              selectedDates={row.dates}
                              onToggle={(date) => updateRow(row.id, "dates", toggleDate(row.dates, date))}
                              onPrevMonth={() => setCalendarMonth((current) => addMonths(current, -1))}
                              onNextMonth={() => setCalendarMonth((current) => addMonths(current, 1))}
                            />
                          </div>
                        )}
                        <div className="field"><FieldLabel>1日単価</FieldLabel><TextInput type="number" value={row.rate} onChange={(e) => updateRow(row.id, "rate", e.target.value)} /></div>
                        <div className="field"><FieldLabel>生徒数</FieldLabel><TextInput type="number" value={row.studentCount} onChange={(e) => updateRow(row.id, "studentCount", e.target.value)} placeholder="例：12" /></div>
                        <div className="field field-full"><FieldLabel>備考</FieldLabel><TextInput value={row.memo} onChange={(e) => updateRow(row.id, "memo", e.target.value)} placeholder="任意" /></div>
                      </div>
                      <div className="mini-total">
                        <span>出勤日数：<b>{workDays}日</b></span>
                        <span>生徒数：<b>{row.studentCount || "未入力"}</b></span>
                        <span>小計：<b>{yen(amount)}</b></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          <Card>
            <div className="card-inner">
              <div className="section-title-row">
                <h2>3. 経費</h2>
                <Button onClick={addExpense}><Plus size={18} /> 経費を追加</Button>
              </div>

              <div className="stack">
                {expenses.map((expense, index) => {
                  const expenseSubtotal = safeNumber(expense.quantity) * safeNumber(expense.amount);
                  return (
                    <div key={expense.id} className="entry-card">
                      <div className="entry-head">
                        <strong>経費 {index + 1}</strong>
                        <Button variant="ghost" onClick={() => removeExpense(expense.id)} disabled={expenses.length === 1}><Trash2 size={16} /> 削除</Button>
                      </div>
                      <div className="form-grid">
                        <div className="field field-full"><FieldLabel>経費の項目</FieldLabel><TextInput value={expense.item} onChange={(e) => updateExpense(expense.id, "item", e.target.value)} placeholder="例：○○体育館（11:00-14:00）" /></div>
                        <div className="field"><FieldLabel>数量</FieldLabel><TextInput type="number" value={expense.quantity} onChange={(e) => updateExpense(expense.id, "quantity", e.target.value)} /></div>
                        <div className="field"><FieldLabel>金額</FieldLabel><TextInput type="number" value={expense.amount} onChange={(e) => updateExpense(expense.id, "amount", e.target.value)} placeholder="例：1000" /></div>
                        <div className="field field-full"><FieldLabel>備考</FieldLabel><TextInput value={expense.memo} onChange={(e) => updateExpense(expense.id, "memo", e.target.value)} placeholder="任意" /></div>
                      </div>
                      <div className="expense-total">小計：<b>{yen(expenseSubtotal)}</b></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          <Card>
            <div className="card-inner">
              <h2>4. 備考</h2>
              <TextAreaInput value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="必要な場合のみ入力" />
            </div>
          </Card>
        </section>

        <section className="preview-section">
          <Card className="invoice-card">
            <div className="invoice">
              <div className="invoice-title">請求書</div>

              <div className="invoice-top">
                <div>
                  <p className="recipient">{recipient}</p>
                  <p>下記の通りご請求申し上げます。</p>
                  <div className="claim-box">
                    <span>ご請求金額</span>
                    <strong>{yen(totals.total)}</strong>
                  </div>
                </div>
                <div className="invoice-meta">
                  <p>請求書番号：{invoiceNo}</p>
                  <p>請求日：{invoiceDate}</p>
                  <p>対象月：{targetMonth}</p>
                  <p className="issuer">{issuer || "請求者名未入力"}</p>
                </div>
              </div>

              <div className="info-grid">
                <p><span>教室名：</span>{school.name}</p>
                <p><span>エリア：</span>{school.area}</p>
                <p><span>曜日：</span>{school.day}</p>
                <p><span>会場：</span>{school.venue}</p>
              </div>

              <h3>出勤情報</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>日付</th>
                      <th>氏名</th>
                      <th>各クラス・業務</th>
                      <th>日数</th>
                      <th>生徒数</th>
                      <th>単価</th>
                      <th>金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => {
                      const workDays = row.dates.length;
                      const amount = workDays * safeNumber(row.rate);
                      return (
                        <tr key={row.id}>
                          <td className="date-cell">{row.dates.length ? row.dates.join("\n") : "未選択"}</td>
                          <td>{row.staff || "未入力"}</td>
                          <td>{row.workDetail}</td>
                          <td className="center">{workDays}日</td>
                          <td className="center">{row.studentCount || "-"}</td>
                          <td className="right">{yen(row.rate)}</td>
                          <td className="right">{yen(amount)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <h3>経費</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>経費の項目</th>
                      <th>数量</th>
                      <th>金額</th>
                      <th>備考</th>
                      <th>小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((expense) => {
                      const expenseSubtotal = safeNumber(expense.quantity) * safeNumber(expense.amount);
                      return (
                        <tr key={expense.id}>
                          <td>{expense.item || "未入力"}</td>
                          <td className="center">{expense.quantity || 0}</td>
                          <td className="right">{yen(expense.amount)}</td>
                          <td>{expense.memo || "-"}</td>
                          <td className="right">{yen(expenseSubtotal)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="totals-table-wrap">
                <table className="totals-table">
                  <tbody>
                    <tr><td>合計出勤日数</td><td className="right">{totals.totalWorkDays}日</td></tr>
                    <tr><td>生徒数合計</td><td className="right">{totals.totalStudents}名</td></tr>
                    <tr><td>出勤小計</td><td className="right">{yen(totals.workTotal)}</td></tr>
                    <tr><td>経費小計</td><td className="right">{yen(totals.expenseTotal)}</td></tr>
                    <tr><td><b>合計金額</b></td><td className="right"><b>{yen(totals.total)}</b></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="note-grid">
                <div>
                  <h3>振込先</h3>
                  <div className="note-box">{bankInfo || "未入力"}</div>
                </div>
                <div>
                  <h3>備考</h3>
                  <div className="note-box">{notes || "-"}</div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
