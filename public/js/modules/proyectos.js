import sweetalert from 'sweetalert2';
import axios from 'axios';

const btn_eliminar = document.querySelector("#eliminar-proyecto");

if (btn_eliminar) {
  btn_eliminar.addEventListener("click", (e) => {
    const url_project = e.target.dataset.projectUrl;
    sweetalert.fire({
      title: 'Queres borrar el proyecto?',
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `Nope`,
      customClass: {
        confirmButton: 'order-2',
        denyButton: 'order-3'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        //send axios request
        axios.delete(
          `${location.origin}/proyecto/${url_project}`,
          {
            params: url_project
          }
        )
        .then((response) => {
          console.log(response);
          sweetalert.fire('Borrado!', '', 'success');
          // setTimeout(() => {
          //   window.location.href = '/';
          // },1500);

        });


      } else if (result.isDenied) {
        sweetalert.fire('Proyecto no borrado', '', 'info')
      }
    });
  });
}

export default btn_eliminar;