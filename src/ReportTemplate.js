import logo from './logo.svg';

const styles = {
	page: {
		marginLeft: '5rem',
		marginRight: '5rem',
		color: 'black',
		backgroundColor: 'white',
	},

	columnLayout: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '3rem 0 5rem 0',
		gap: '2rem',
	},

	column: {
		display: 'flex',
		flexDirection: 'column',
	},

	spacer2: {
		height: '2rem',
	},

	fullWidth: {
		width: '100%',
	},

	marginb0: {
		marginBottom: 0,
	},
};

const ReportTemplate = () => {
	return (
		<>
			<div style={styles.page}>
				<div>
					<h1 style={styles.introText}>
						Report Heading That Spans More Than Just One Line
					</h1>
				</div>

				<div style={styles.spacer2}></div>

				{/* <img style={styles.fullWidth} src="foto1.png" /> */}
			</div>

			<div style={styles.page}>
				<div>
					<h2 style={styles.introText}>
						Report Heading That Spans More Than Just One Line
					</h2>
				</div>

				<div style={styles.columnLayout}>
					<div style={styles.column}>
						{/* <img style={styles.fullWidth} src="foto1.png" /> */}
						<h4 style={styles.marginb0}>Subtitle One</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div style={styles.column}>
						{/* <img style={styles.fullWidth} src="foto1.png" /> */}
						<h4 style={styles.marginb0}>Subtitle Two</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>

				<div style={styles.columnLayout}>
					<div style={styles.column}>
						{/* <img style={styles.fullWidth} src="logo" /> */}
						<h4 style={styles.marginb0}>Subtitle One</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div style={styles.column}>
						{/* <img style={styles.fullWidth} src="../public/Photosphere1.jpg" /> */}
						<h4 style={styles.marginb0}>Subtitle Two</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReportTemplate;
