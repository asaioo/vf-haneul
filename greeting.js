export function greet(name) {
  if (!name) throw new TypeError('name is required');
  return `Hello, ${name}!`;
}
