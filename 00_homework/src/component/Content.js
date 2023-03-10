function Content(props) {

    console.log(props);

    return (
        <div className="content">
            <img style={{ border: '20px ridge wheat', width: '300px', height: 'auto' }}
                src="KakaoTalk_20230307_160510255.jpg"
                alt="프로필 사진" />
            <h3>안녕하세요! 제 이름은</h3>
            <h1 style={{ marginRight: '20px', display: 'inline-block', margin: '0' }}>염진호</h1>
            <h1 style={{ display: 'inline-block', margin: '0' }}>Jinho Yeom</h1>
            <h3>입니다!</h3>
            <h2 style={{ display: 'inline-block', margin: '0' }}>무엇을 찾으시나요?</h2>
        </div>

    );


}

export default Content;