# Palindrome Checker

Pequeño proyecto hecho en **JavaScript** como parte de freeCodeCamp.  
La idea es simple: escribir una palabra o frase y ver si es un **palíndromo** ✨  
(es decir, que se lee igual de adelante para atrás y viceversa).

---

## 🚀 Cómo usarlo

1. Escribí un texto en el input.
2. Tocá el botón **Check**.
3. Te va a decir si es o no un palíndromo ✅❌

👉 Si no ponés nada y apretás el botón, aparece un mensaje:  
**"Please input a value"**

---

## 📚 Ejemplos

- `race car` → ✅ es un palíndromo  
- `A man, a plan, a canal. Panama` → ✅ es un palíndromo  
- `not a palindrome` → ❌ no es un palíndromo

---

## 🧮 Algoritmo

El proyecto verifica si un texto es un **palíndromo**.  
El proceso es sencillo:

- Se eliminan todos los caracteres que no sean letras o números  
- Se convierten todos los caracteres a minúsculas para uniformidad  
- Se invierte el texto usando `split("").reverse().join("")`  
- Se compara con el texto original filtrado; si son iguales, es un palíndromo

```javascript
function isPalindrome(str) {
  let filtered = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return filtered === filtered.split("").reverse().join("");
}
```
---

## 💻 Casos de Prueba

La app pasa los casos requeridos por freeCodeCamp:

✅ "A" → is a palindrome

✅ "eye" → is a palindrome

✅ "race car" → is a palindrome

✅ "A man, a plan, a canal. Panama" → is a palindrome

✅ "never odd or even" → is a palindrome

✅ "nope" → is not a palindrome

✅ "almostomla" → is not a palindrome

✅ Y más casos edge...

---

## 🎨 Diseño

Paleta de colores: tonos teal y grises

Tipografía: Verdana

Animaciones suaves y efectos hover

Feedback visual inmediato

---

## 📱 Responsive Design

Optimizado para:

-📱 Móviles: 320px - 480px

-💻 Desktop: 481px+

-♿ Accesibilidad: prefers-reduced-motion y navegación por teclado

---

## 🛠 Tecnologías

- HTML  
- CSS  
- JavaScript  

---

✌️ Eso es todo. Proyecto simple pero útil para practicar lógica y DOM.
