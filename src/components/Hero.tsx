export default function Hero() {
  return (
		<section className="hero" id="home">
			<div className="container hero-inner">
				<div className="hero-content">
					<h1>
						Reactを中心にWebアプリ開発とUI実装に取り組んでいます
					</h1>
					<p>
						ポートフォリオとしての入口LPです。代表作の lofi-app を中心に、
            制作したWeb作品と開発の方向性を掲載しています。
					</p>
					<div className="hero-buttons">
						<a href="#works-main" className="btn btn-primary">
							作品を見る
						</a>
						<a
							href="https://lofi-react.vercel.app/"
							className="btn btn-secondary"
							target="_blank"
							rel="noopener noreferrer"
						>
							ストアを見る
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
