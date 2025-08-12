document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[type=hidden][name$="contenu"]').forEach(function(hiddenInput) {
        if (hiddenInput.nextSibling && hiddenInput.nextSibling.tagName === 'TRIX-EDITOR') {
            return;
        }
        var trixEditor = document.createElement('trix-editor');
        trixEditor.setAttribute('input', hiddenInput.id);
        trixEditor.style.minHeight = "200px";
        trixEditor.style.border = "1px solid #ccc";
        trixEditor.style.borderRadius = "4px";
        trixEditor.style.padding = "5px";

        hiddenInput.parentNode.insertBefore(trixEditor, hiddenInput.nextSibling);
    });
});
