export default function Projects() {
    return <>
        <div className="p-4 bg-body tw-h-full">
            <div className="tw-flex tw-flex-row tw-justify-center gap-5 tw-content-stretch tw-flex-wrap">
                <div className="card shadow-sm">
                    <div className="card-body tw-justify-between tw-items-start tw-flex tw-flex-col">
                        <h5 className="card-title">SA GPS Redux</h5>
                        <p className="card-text">A mod that adds full GPS support to GTA SA. <br/> Including mission objective GPS.</p>
                        <a href="https://github.com/Juicermv/GTA-GPS-Redux" className="btn btn-primary bi bi-github shadow"></a>
                    </div>
                </div>
                <div className="card shadow-sm">
                    <div className="card-body tw-justify-between tw-items-start tw-flex tw-flex-col">
                        <h5 className="card-title">AutoHealSA</h5>
                        <p className="card-text">A small GTA SA script that provides healing behavior similar to GTA V's.</p>
                        <a href="https://github.com/Juicermv/AutoHealSA" className="btn btn-primary bi bi-github shadow"></a>
                    </div>
                </div>
            </div>
        </div>
    </>
}