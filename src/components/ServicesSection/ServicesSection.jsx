

const ServicesSection = () => {
    return (
        <div className="bg-[#D9E0EC] p-10  mt-20 mb-20">
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
                <div>
                    <h4 className="font-extrabold text-2xl">The amazing NFT art <br /> of the world here</h4>
                </div>
                <div className="flex gap-3">
                    <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO2ZTWrDQAxG3zFs90Ix7nH6c4D0WskioRepc4G6XSQrlQkaGIaASxa1VOvB4JlBBn18MgYJgiAIgoV5BHbANyDG15fmOtQi3gwkd+/alk6kizPwBLTYpwWeNWfJzuz1kER440VzT2V2rbd0aPBHo7lPFLXmFcn5hxAjSDhiDAlHjCGrcWQATlVwjhuBHidCxuK+FpKeHzgsLTFcgjInpHbg1tmdkBpXQsb/8o30KqaMyXFJxAYbyGr+I16QEGIMCUeMIatx5B04zuyXjPu1kPTSYWa/ZNz6SssLkvOfdOOheV3zoLl/og1g0e62N17LJvZQjBVSd7vDPp2KuJRjBXRYIt4HPZlBLcpjBpejtyAIgoC/5AdvP4PlBQHhbAAAAABJRU5ErkJggg==" />

                    </div>
                    <div>
                        <h6 className="font-extrabold">Fast Transaction</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE2klEQVR4nO2Za4iWVRDHf7pa0VIhhWm5lWtr2RcxscAs+5AGlZXWGhRdTe1qJZhkUZSVa7fttpkVW3bz0mXLorSNSk0KsgsRWHZVu2JKFpTiZWPg/8JwOM+7z9n2XQ2eP8yHd/bMeWaec+Y/88xCgQIFChQoUDkMA2YATcAiyVKgNSKLnCwA5jp5GGgA7gCmA1OAScB44AzgJOBYYAhQC/QFegHdOiOIocB2oG0Xy1ZgE7AO+BpoTg3kBm30LnAlUC8ZrTdoMgrYApyu3ye7deP11ksyXXvayTygk1oItOhEPwA+Ab4FfpbzOzOCq0oJ5EkZTSizpg74nsqip65Znfz5O3WD12Q4psyao4Bb6Br0lj+/pRqulOFw/b4GOK6DTnQXCVgSx9APOLedPWrlzzepD/9ShkeKPSzZBiXucZdyx67n+xks1E05Mq2dvQbLn08TfeAXGVoCTwR+Bc52yTzRJfL1SmaTWUrou4FtouINwNvSN2hNab0l/Z/AxcBZCvwYXdveOk3DCPmzPDWQTTL8WG9sqa7HfD28SU7NdE6FErJWSWa4oO7Rfrb3m8AK4DORSJuYy/JivX6/lRrIXzLck12Dm4H3dEpfAdfKn8WpG22RYelouxIHAD8A/VVXRulat+nkkrBTlT2GHsAjVBZVwEhgjn6fo0DmpWzSQ0b/sPvgPPn0WIrR3jIyNqkU6l2TuUSE8oZqSgwXyqekm7CfjDZSOTSL+epF8Ua7nwPHZ6y/RD5ZJ52UbO21A7UBpV4lhsmLBbr3Hu8AJ2asnySfHkx4BgfJ6Mcyay5XjWlwHe3WBLperK7Zo1UnE8MV8ul+EnCojMp1ttZ7NQY6Wz8g0HVXe2Fveqwq+FRgTcTpJbpmMUyRT+Ezy+JwGdnDsmBtyexAtyxyNcyxP1TcWpQb94rawyb0deCUjOddJ5/MNjfqcgRyE3BboHsGuCDQjcmoxtv1aevxauS6lTBVPt1HJ5/ITAXjcSdwY6A7E3glUuxs/yMC/ctaH8PVsnmIBAyQkX0jZ2G2rldIAI8GurFy0GMv7V8T6F9QKxLDZbKxBjM38nzENKqR8zhNtWeVEyOAl4J1+2h/o3mP+RFKDuvIUymB9JeRNWxZaNIJeIxQCz7USaPetMf+2r860D+rViSG82XzfEfo97sya56IDCaGaBIS0mbYsfYBdkS+GOdFyIKgaXyRBBySI5Cn9ZZCtlsTKWRWxT1qMvq4ZtWZGE6VT0bRuVGToyAu1Owq7Ah+irQWz0XIJNY1PA5cmvG8kfLJalVu9JORfdxkoSVClfsCmwPdRbr7HoM03AgxR+wUw9HyyXIwNw6W0dpAv4daE2sSVyuJGzQtmas3usO15/b3LzQ59HPiDzVoKzHbcunXq38zkggxMMd1z2wabQQUfqfcHpmETHNDhglu0lLvxquhDJPDw51unGxCWvYd+e8pgfR1gVSX6Ui7ElU67W0pU/o+CmSzWMha9LxzWvuSK51eR/8tMDBDv0F+WR3KhQPdN7u1GOjIrVCi/2VUi/ONcn3FtjESSvCSbQp6qlu2vUKsdtPP5IGxTcIP08BusH6v0x1vFQX3crJRwd2qWlPbAVkJTI7oV8mvE/IGUkqs3VXGpSTWCp3Cf5G16tc6Uz7SDSlQoEAB/r/4FwAfwNKC6UwOAAAAAElFTkSuQmCC" /></div>
                    <div>
                        <h6 className="font-extrabold">Growth Transaction</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;