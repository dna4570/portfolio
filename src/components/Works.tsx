const subWorks = [
  {
    title: '冷蔵庫管理アプリ',
    text: '食材をカテゴリごとに整理し、未使用食材を確認できる実用系アプリです。',
    link: 'https://dna4570.github.io/fridge-manager/',
    image: '/img/images/FleshFood.png',
  },
  {
    title: 'Spot-dig',
    text: '企業サイト風のレイアウトと情報配置を意識して制作したデザインLPです。',
    link: 'https://spot-dig.vercel.app/',
    image: '/img/images/spotdig.png',
  },
]

export default function Works() {
  return (
    <section id="works-main" className="works-section">
      <div className="container">
        <div className="section-heading">
          <h2>works</h2>
          <p>個人制作の中から、現在見せたい3作品を掲載しています。</p>
        </div>

        <div className="main-work-card">
          <div className="main-work-image">
            <img src="/img/works/Work01.jpg" alt="Lo-Fi Store" />
          </div>

          <div className="main-work-body">
            <p className="eyebrow">Main Project</p>
            <h3>Lo-Fi Store</h3>
            <p>
              ローファイ音源を販売できるWebアプリ（開発中）
              <br />
              カート機能・UI設計を意識して構築。
            </p>

            <div className="button-row">
              <a
                href={import.meta.env.VITE_SHOPIFY_URL || '#'}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                ストアを見る
              </a>

              <a
                href="https://github.com/dna4570/lofi-react.git"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHubを見る
              </a>
            </div>
          </div>
        </div>

        <div className="sub-work-grid">
          {subWorks.map((work) => (
            <article key={work.title} className="sub-work-card">
              <img src={work.image} alt={work.title} />
              <div className="sub-work-body">
                <h3>{work.title}</h3>
                <p>{work.text}</p>
                <a
                  href={work.link}
                  className="btn btn-small btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  作品を見る
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
