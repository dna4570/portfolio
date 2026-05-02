const features = [
  {
    title: '先人の教えを胸に',
    text: '1富士2鷹3茄子、粋でイナセナなSENSEIでありたいから日々なるべく勉強します。',
    image: '/Pixel%20Art.jpg',
  },
  {
    title: '安心できる生活を',
    text: 'undergroundな体験を経てlofi制作での創造性とWeb開発をつなげ、アプリとして構築しています。',
    image: '/Pixel%20Art.jpg',
  },
  {
    title: 'より良い未来を目指して',
    text: '健康を意識しつつ、日々直感を信じ頑張ります。',
    image: '/Pixel%20Art.jpg',
  },
]

export default function Features() {
  return (
    <section className="features-section" id="skill">
      <div className="container">
        <div className="section-heading section-heading-light">
          <h2>feature</h2>
          <p>現在の制作テーマと、アプリ開発の方向性をまとめています。</p>
        </div>

        <div className="feature-grid">
          {features.map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="feature-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
