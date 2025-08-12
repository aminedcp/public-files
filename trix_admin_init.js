document.addEventListener('DOMContentLoaded', function() {
    // Cherche tous les champs cachés dont le name contient "contenu"
    document.querySelectorAll('input[type=hidden][name$="contenu"]').forEach(function(hiddenInput) {
        if (hiddenInput.nextSibling && hiddenInput.nextSibling.tagName === 'TRIX-EDITOR') {
            // déja inséré, skip
            return;
        }

        // Crée l'élément trix-editor
        var trixEditor = document.createElement('trix-editor');
        trixEditor.setAttribute('input', hiddenInput.id);
        trixEditor.style.minHeight = "200px";
        trixEditor.style.border = "1px solid #ccc";
        trixEditor.style.borderRadius = "4px";
        trixEditor.style.padding = "5px";

        // Insère juste après le champ caché
        hiddenInput.parentNode.insertBefore(trixEditor, hiddenInput.nextSibling);
    });
});
