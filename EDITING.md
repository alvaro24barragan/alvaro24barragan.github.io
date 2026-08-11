# Cómo editar el portfolio

La información profesional está separada del diseño. Para actualizar textos, experiencias, estudios, proyectos, habilidades o cursos solo hay que editar:

`content/profile.json`

## Añadir una experiencia

Dentro de `experience`, duplica una experiencia existente y modifica sus campos:

```json
{
  "company": "Nombre de la empresa",
  "role": "Puesto",
  "location": "Ciudad, país",
  "period": "Jan 2027 - Present",
  "summary": "Resumen breve visible en la vista tipo CV.",
  "details": [
    "Responsabilidad o logro detallado.",
    "Segunda responsabilidad o logro."
  ],
  "skills": ["Python", "SQL"]
}
```

## Añadir un curso

1. Copia el certificado a `public/certificates/` con un nombre sencillo, por ejemplo `nuevo-curso.pdf`.
2. Añade una ficha dentro de `courses`:

```json
{
  "title": "Nombre del curso",
  "provider": "Entidad",
  "date": "Jan 15, 2027",
  "duration": "4 hrs",
  "category": "ML & MLOps",
  "certificate": "/certificates/nuevo-curso.pdf",
  "featured": false
}
```

Categorías existentes:

- `GenAI & deep learning`
- `ML & MLOps`
- `Python & data`
- `AI foundations`

Si `featured` es `true`, el curso aparecerá también entre los certificados destacados.

La página mantiene seis cursos destacados. Utiliza `featured: true` únicamente en la formación más relevante o avanzada; el resto seguirá apareciendo en el historial completo.

## Editar los idiomas

El contenido original se mantiene en inglés dentro de `content/profile.json`. Las traducciones de los textos profesionales y de la interfaz están en:

`app/i18n.ts`

La página utiliza inglés por defecto y permite cambiar a español o alemán desde la cabecera. Si se modifica una descripción profesional en inglés, también debe actualizarse su traducción en este archivo.

## Actualizar Current focus

La sección `Current focus` se gestiona desde la lista `currentFocus`. Cada elemento puede incluir:

```json
{
  "status": "In progress",
  "title": "Nombre de la certificación o proyecto",
  "description": "Descripción breve y factual.",
  "link": "https://enlace-opcional.com",
  "linkLabel": "Texto del enlace"
}
```

Para añadir un nuevo objetivo, duplica uno de los elementos existentes. Si todavía no tiene una página pública, elimina `link` y `linkLabel`.

## Añadir una actividad personal

La sección `Other activities` se gestiona desde la lista `additionalActivities`:

```json
{
  "title": "Nombre de la actividad",
  "organisation": "Organización",
  "period": "2010 - Present",
  "description": "Descripción breve y concreta."
}
```

## Publicar un cambio

Desde GitHub puedes abrir `content/profile.json`, pulsar el icono de edición, guardar mediante **Commit changes** y esperar a que GitHub Pages publique la actualización automáticamente.

Importante: conserva las comas y comillas del archivo. Si prefieres no tocarlo, el mismo cambio puede realizarse indicando qué información debe añadirse o corregirse.
