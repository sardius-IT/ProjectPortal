// app/lib/checkAdminRole.js

export function isAdmin() {
  if (typeof window !== 'undefined') {
    const userRole = localStorage.getItem('role');
    return userRole === 'admin';
  }
  return false;
}
