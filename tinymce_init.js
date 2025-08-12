document.addEventListener('DOMContentLoaded', function () {
    function initTiny(selector) {
        tinymce.init({
            selector: selector,
            menubar: false,
            plugins: 'lists link table code',
            toolbar: 'bold italic underline | bullist numlist | link table | alignleft aligncenter alignright | code',
            branding: false,
            height: 300
        });
    }

    initTiny('textarea.wysiwyg-editor');

    // Ré-init sur ajout d'inline
    document.body.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('add-row')) {
            setTimeout(function () {
                initTiny('textarea.wysiwyg-editor');
            }, 100);
        }
    });
});
