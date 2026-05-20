import React from "react";

export default function UiIcon({ name }) {
  const icons = {
    builder: (
      <path d="M6 17.5V7.75a1.75 1.75 0 0 1 1.75-1.75h8.5A1.75 1.75 0 0 1 18 7.75v9.75M9 10h6M9 13h4M8 18h8" />
    ),
    bell: (
      <path d="M12 18a2.2 2.2 0 0 0 2-1.3M7.25 15.5h9.5l-1.1-1.45V10a3.65 3.65 0 1 0-7.3 0v4.05L7.25 15.5Z" />
    ),
    send: <path d="m5 12 13-6-3.6 12-3.1-4.15L5 12Zm6.3 1.85L18 6" />,
    chart: <path d="M7 16.5V12m5 4.5V9m5 7.5V6.5M5.5 18h13" />,
    stack: <path d="m12 6 6 3-6 3-6-3 6-3Zm6 6-6 3-6-3m12 3-6 3-6-3" />,
    spark: <path d="m12 5 1.2 3.3L16.5 9l-3.3 1.2L12 13.5l-1.2-3.3L7.5 9l3.3-1.2L12 5Z" />,
    eye: <path d="M4.75 12S7.4 7.75 12 7.75 19.25 12 19.25 12 16.6 16.25 12 16.25 4.75 12 4.75 12Zm7 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z" />,
    clock: <path d="M12 6.25a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5Zm0 2.25V12l2.25 1.4" />,
    users: <path d="M9.25 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5.5-.5a1.75 1.75 0 1 0 0-3.5M5.75 16c.5-1.8 2.1-2.75 3.5-2.75s3 .95 3.5 2.75m1.25 0c.28-1.1 1.16-1.85 2.25-2.1" />,
    check: <path d="m7 12.4 3.05 3.1L17 8.7" />,
    route: <path d="M6.5 8.25h5.75a2 2 0 1 1 0 4H10a2 2 0 1 0 0 4h7.5m-2.5-2.5 2.5 2.5-2.5 2.5" />,
    logout: <path d="M10 7.25V6.5A1.5 1.5 0 0 1 11.5 5h4A1.5 1.5 0 0 1 17 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 10 17.5v-.75M13.5 12H6m0 0 2.5-2.5M6 12l2.5 2.5" />,
    list: <path d="M8 8.25h8M8 12h8M8 15.75h8M5.25 8.25h.01M5.25 12h.01M5.25 15.75h.01" />,
    plus: <path d="M12 7v10M7 12h10" />,
    minus: <path d="M7 12h10" />,
    calendar: <path d="M7.5 6v2M16.5 6v2M6.5 9h11M7.5 12h3m-3 3h5m-6-9h11a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />,
    history: <path d="M7 8.5V5.75M7 5.75H4.25M7 5.75 9 7.8M7.3 9A5.75 5.75 0 1 1 6.25 12M12 9v3l2 1.25" />,
  };

  return (
    <svg
      className="ui-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}
