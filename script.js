 function showPlan() {
            document.getElementById('welcome').style.display = 'none';
            document.getElementById('plan').style.display = 'block';
               document.getElementById('back-arrow').scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        function showWelcome() {
    document.getElementById('plan').style.display = 'none';
    document.getElementById('welcome').style.display = 'flex';
}
