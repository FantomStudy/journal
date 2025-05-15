export const getCookie = (name: string) => {
  const match = document.cookie.match(`(?:^|; )${name}=([^;]*)`);
  return match ? match[1] : null;
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
  window.location.href = "/login";
};
