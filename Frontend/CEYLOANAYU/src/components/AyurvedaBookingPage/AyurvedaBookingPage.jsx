import React, { useState } from "react";
import "./AyurvedaBookingPage.css";

export default function AyurvedaBookingPage() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patient, setPatient] = useState({
    name: "",
    phone: "",
    age: "",
    notes: "",
  });
  const [payment, setPayment] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const services = [
    { name: "Ayurvedic Consultation", price: 2500 },
    { name: "Panchakarma Treatment", price: 6000 },
    { name: "Herbal Massage", price: 3500 },
    { name: "Online Consultation", price: 2000 },
  ];

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const toggleService = (s) => {
    setSelectedServices((prev) => {
      const exists = prev.find((item) => item.name === s.name);
      if (exists) return prev.filter((item) => item.name !== s.name);
      return [...prev, s];
    });
  };

  const totalPrice = selectedServices.reduce(
    (sum, s) => sum + (s.price || 0),
    0
  );

  const submitBooking = () => {
    if (
      selectedServices.length === 0 ||
      !date ||
      !time ||
      !patient.name ||
      !payment
    ) {
      alert("Please complete all required fields.");
      return;
    }
    setConfirmed(true);
  };

  const reset = () => {
    setStep(1);
    setSelectedServices([]);
    setDate("");
    setTime("");
    setPatient({ name: "", phone: "", age: "", notes: "" });
    setPayment("");
    setConfirmed(false);
  };

  return (
    <div className="booking-container">
      <h1 className="title">Ayurveda Booking</h1>

      {!confirmed && (
        <div className="card">
          {step === 1 && (
            <div>
              <h2>Select Services</h2>
              <div className="grid">
                {services.map((s) => {
                  const active = selectedServices.some(
                    (sel) => sel.name === s.name
                  );
                  return (
                    <button
                      key={s.name}
                      className={`option ${active ? "selected" : ""}`}
                      onClick={() => toggleService(s)}
                      type="button"
                    >
                      {s.name} — Rs. {s.price}
                    </button>
                  );
                })}
              </div>

              <div style={{ marginTop: 12 }}>
                <button
                  className="option"
                  onClick={() => setSelectedServices([])}
                >
                  Clear
                </button>
                <button
                  className="next-btn"
                  onClick={() => setStep(2)}
                  style={{ marginLeft: 8 }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2>Select Date & Time</h2>
              <input
                type="date"
                className="input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <div className="grid" style={{ marginTop: 12 }}>
                {times.map((t) => (
                  <button
                    key={t}
                    className={`option ${time === t ? "selected" : ""}`}
                    onClick={() => setTime(t)}
                    type="button"
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: 12 }}>
                <button className="option" onClick={() => setStep(1)}>
                  Back
                </button>
                <button
                  className="next-btn"
                  onClick={() => setStep(3)}
                  style={{ marginLeft: 8 }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2>Patient Details</h2>
              <input
                className="input"
                placeholder="Full Name"
                value={patient.name}
                onChange={(e) =>
                  setPatient({ ...patient, name: e.target.value })
                }
              />
              <input
                className="input"
                placeholder="Phone Number"
                value={patient.phone}
                onChange={(e) =>
                  setPatient({ ...patient, phone: e.target.value })
                }
              />
              <input
                className="input"
                placeholder="Age"
                value={patient.age}
                onChange={(e) =>
                  setPatient({ ...patient, age: e.target.value })
                }
              />
              <input
                className="input"
                placeholder="Notes (optional)"
                value={patient.notes}
                onChange={(e) =>
                  setPatient({ ...patient, notes: e.target.value })
                }
              />

              <div style={{ marginTop: 12 }}>
                <button className="option" onClick={() => setStep(2)}>
                  Back
                </button>
                <button
                  className="next-btn"
                  onClick={() => setStep(4)}
                  style={{ marginLeft: 8 }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2>Payment & Summary</h2>

              <p>
                <strong>Services:</strong>{" "}
                {selectedServices.map((s) => s.name).join(", ")}
              </p>
              <p>
                <strong>Date:</strong> {date}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              <p>
                <strong>Patient:</strong> {patient.name} — {patient.phone} —{" "}
                {patient.age}
              </p>

              <h3>Select Payment Method</h3>

              <div className="grid" style={{ marginTop: 12 }}>
                <button
                  className={`option ${payment === "card" ? "selected" : ""}`}
                  onClick={() => setPayment("card")}
                >
                  Card
                </button>
                <button
                  className={`option ${payment === "cash" ? "selected" : ""}`}
                  onClick={() => setPayment("cash")}
                >
                  Cash
                </button>
                <button
                  className={`option ${payment === "bank" ? "selected" : ""}`}
                  onClick={() => setPayment("bank")}
                >
                  Bank Transfer
                </button>
              </div>

              <p style={{ marginTop: 12 }}>
                <strong>Total:</strong> Rs. {totalPrice}
              </p>

              <div style={{ marginTop: 12 }}>
                <button className="option" onClick={() => setStep(3)}>
                  Back
                </button>
                <button
                  className="next-btn"
                  onClick={submitBooking}
                  style={{ marginLeft: 8 }}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {confirmed && (
        <div className="card success-box">
          <h2>Booking Confirmed</h2>
          <p>
            Your booking for{" "}
            <strong>
              {selectedServices.map((s) => s.name).join(", ")}
            </strong>{" "}
            on <strong>{date}</strong> at <strong>{time}</strong> is confirmed.
          </p>

          <p>Total: Rs. {totalPrice}</p>

          <button className="next-btn" onClick={reset}>
            Make another booking
          </button>
        </div>
      )}
    </div>
  );
}
