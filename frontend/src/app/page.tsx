"use client";

export default function Home() {
  const user = window.localStorage.getItem("token");

  if (user) {
    window.location.href = "/classrooms";
  } else {
    window.location.href = "/login";
  }

  return null;
}
