import {
  BookmarkAltIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ChatIcon,
} from '@heroicons/react/outline'
export default function Example() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                </div>
                <p className="">
                  ESCUELA SUPERIOR DE FORMACIÓN ARTÍSTICA
                </p>
                <p className="">
                  "Felipe Guamán Poma de Ayala"
                </p>

                <div></div>
              </div>

              <div className="">

                <div>
                  <i className=""></i>
                  <p>Ayacucho</p>
                </div>
                <div>
                  <i className="text-secondary fa fa-phone fa-2x"></i>
                  <p>https://www.esfapa.edu.pe</p>
                </div>
                <p>
                  Teléfono: 066-287499
                </p>
                <div>
                  <p className="text-info">©Copyright ESFA Ayacucho 2025</p>
                </div>
                <div>
                  <i className="text-secondary fa fa-envelope fa-2x"></i>
                  <p>
                    <a className="text-secondary" href="wwwww"></a>
                  </p>
                </div>
              </div>

              <div className="container text-center p-1 col-md-6 col-lg-4 col-xl-4">
                <p className="text-center">
                  Jr. Mariano Melgar Nº 398, Distrito Jesús Nazareno Huamanga, Ayacucho
                </p>

                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://api.whatsapp.com/send?phone=+51 966999215&text=Hola%20bienvenido">
                  <ChatIcon style={{ width: ".9cm", color: "magenta" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://m.me/bellasartes.ayacucho">
                  <PhoneIcon style={{ width: ".9cm", color: "magenta" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://bellasartes.blogspot.com">
                  <ShieldCheckIcon style={{ width: ".9cm", color: "magenta" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://web.facebook.com/bellasartes.ayacucho">
                  <PlayIcon style={{ width: ".9cm", color: "magenta" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://instagram.com/bellasartes.ayacucho">
                  <RefreshIcon style={{ width: ".9cm", color: "magenta" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://www.tiktok.com/@bellasartes.ayacucho">
                  <CursorClickIcon style={{ width: ".9cm", color: "magenta" }} />
                </a>
                <a className="text-dark" style={{ margin: ".1cm;" }} target="_blank"
                  href="https://www.youtube.com/channel/UCkYf1NyZ1kUl3965WgeL6rw">
                  <BookmarkAltIcon style={{ width: ".9cm", color: "magenta" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <header style={{
          textAlign: 'center', display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }} >
          <img src={'./logo.png'} style={{ height: "5cm" }} alt="logo" />
        </header>
        <div className="">
          <h1 className="">
            <span className="">Escuela Superior de Formación
              Artística Felipe Guamán Poma de Ayala</span> <span className="">ESFAPA Ayacucho</span>
          </h1>
          <p className="">
            Escuela Superior de Formación Artística pública de formación profesional en artes visuales desarrollado en un plan de estudios de 5 años ubicado en la ciudad de Ayacucho.
          </p>
          <div style={{ padding: '.1cm', textAlign: 'center', margin: 'auto', display: 'block' }}>
            <div>
              <button style={{ background: "orange" }}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/nosotros'
                }}
              >
                Saber más
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <iframe width="560" height="515" src="https://www.youtube.com/embed/osNsEH8AzYI?si=Sn1WBAfFtZTGKEJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="">
          <iframe width="560" height="515" src="https://www.youtube.com/embed/v4XrFviDcVY?si=KG8LN_EXVR5rQJ_n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="">
          <iframe width="560" height="515" src="https://www.youtube.com/embed/wdu6D0hNORI?si=XOixWvAKIoFx0-lI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="">
          <p className="">
            Escuela Superior de Formación Artística pública de formación profesional en artes visuales desarrollado en un plan de estudios de 5 años ubicado en la ciudad de Ayacucho.
          </p>
          <div className="">
            <img style={{ width: '100%' }}
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noZWRNgM9PMwgOkKmW2d8SAlOA6XcE7e2vZxBe4XFgujzc-GmRLP82Xqty1eQBjIjn2OrDQlRdvdvp4JrAiyGaME4G7kwKWDfSYKja1hN-MxzqEQ7LK5YrUPFIJBCSAFOcJnhcU=s680-w680-h510"
              alt=""
            />
          </div>
        </div>
        <iframe style={{ width: "100%", height: "12cm", frameborder: "0cm", scrolling: "no" }}
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=es&amp;q=+(Escuela%20de%20Bellas%20Artes%20Felipe%20Guam%C3%A1n%20Poma%20de%20Ayala-Ayacucho)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
            href="https://www.gps.ie/car-satnav-gps/">Car GPS</a></iframe>
        <iframe style={{ width: "100%", height: "15cm", frameborder: "0cm", scrolling: "no" }}
          src="https://www.google.com/maps/embed?pb=!4v1655850799758!6m8!1m7!1sGm3v-xYcR1tj1gz95RrkYg!2m2!1d-13.15635415471263!2d-74.2180525291301!3f124.85298126566764!4f2.1996870284465047!5f0.7820865974627469"
          allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  )
}
