export function setMeta({ title, description }) {
  if (title) document.title = title

  const setTag = (name, content) => {
    let el = document.querySelector(`meta[name="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('name', name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  if (description) setTag('description', description)
}
