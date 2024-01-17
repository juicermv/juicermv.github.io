export default function Home() {
    

    return <>
        <div className="p-4">
            <div className="px-4 tw-flex tw-flex-row tw-flex-nowrap text-bg-primary bg-primary tw-items-center shadow-sm rounded">
                <img src="https://github.com/juicermv.png" className="tw-flex-none" />
                <div className="tw-flex tw-flex-col tw-content-stretch">
                    <h1>Welcome.</h1>
                    <span className="text-wrap">
                        My name is juicermv.
                        I use my free time to code various projects (including this website).

                        <br/>
                        I am proficient with C++, C#, Python, and Node.js.
                        <br/>
                        Head to <b>Projects</b> to see my works.
                    </span>
                </div>
            </div>
        </div>
    </>
}