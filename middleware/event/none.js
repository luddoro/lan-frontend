export default function({store, $auth, redirect }) {
    if (store.state.event.details == undefined) {
        let user = $auth.$state.user;

        if((user && user.admin == 1)) {
            return redirect('/admin/event/create');
        }
        return redirect('/event/none');
    }
}