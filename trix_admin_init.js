document.addEventListener('DOMContentLoaded', function() {
    // Pour chaque champ caché "contenu", on insère un trix-editor juste après
    document.querySelectorAll('input[type=hidden][name$="contenu"]').forEach(function(hiddenInput) {
        // Créer l'éditeur trix
        var trixEditor = document.createElement('trix-editor');
        trixEditor.setAttribute('input', hiddenInput.id);
        trixEditor.style.minHeight = "200px";
        trixEditor.style.border = "1px solid #ccc";
        trixEditor.style.borderRadius = "4px";
        trixEditor.style.padding = "5px";

        // Insérer l'éditeur après le champ caché
        hiddenInput.parentNode.insertBefore(trixEditor, hiddenInput.nextSibling);
    });
});