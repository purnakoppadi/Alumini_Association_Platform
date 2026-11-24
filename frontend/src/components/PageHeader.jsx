function PageHeader({ title, gradientText, description }) {
  return (
    <section className="page-header">
      <h1>{title} <span className="gradient-text">{gradientText}</span></h1>
      <p>{description}</p>
    </section>
  )
}

export default PageHeader
