const features = [
	{
		title: 'lofi-app の制作目的',
    text: '音楽制作とWeb開発をつなげ、自分のテーマを持ったアプリとして構築しています。',
    image: '/Pixel%20Art.jpg',

	},
		{
		title: 'lofi-app の制作目的',
    text: '音楽制作とWeb開発をつなげ、自分のテーマを持ったアプリとして構築しています。',
    image: '/Pixel%20Art.jpg',

	},
		{
		title: 'lofi-app の制作目的',
    text: '音楽制作とWeb開発をつなげ、自分のテーマを持ったアプリとして構築しています。',
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
