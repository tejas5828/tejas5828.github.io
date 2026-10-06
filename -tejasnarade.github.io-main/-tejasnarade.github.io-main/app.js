// Tejas Narade - Portfolio Scripts

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // User Photo Loading
    // -------------------------------------------------------------
    const userPhoto = document.getElementById('userPhoto');
    const photoPlaceholder = document.getElementById('photoPlaceholder');
    const photoSlot = document.getElementById('photoSlot');

    const savedPhoto = localStorage.getItem('tejas_user_photo');
    if (savedPhoto && userPhoto) {
        userPhoto.src = savedPhoto;
        userPhoto.style.display = 'block';
        if (photoPlaceholder) {
            photoPlaceholder.style.display = 'none';
        }
        if (photoSlot) {
            photoSlot.classList.add('has-photo');
        }
    }

    // -------------------------------------------------------------
    // Automatic Experience Calculator (AGV Systems Pvt. Ltd.)
    // Starts: 1 September 2026 onwards
    // -------------------------------------------------------------
    function updateAgvExperience() {
        const startYear = 2026;
        const startMonth = 8; // September (0-indexed: 0 = Jan, 8 = Sep)
        const startDate = 1;

        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const currentDate = now.getDate();

        // Calculate total calendar months of tenure from Sep 1, 2026
        let totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
        
        // Count starting month as active
        if (currentDate >= startDate) {
            totalMonths += 1;
        }

        if (totalMonths < 1) {
            totalMonths = 1;
        }

        let formattedExp = '';
        if (totalMonths < 12) {
            formattedExp = `${totalMonths} ${totalMonths === 1 ? 'Month' : 'Months'}`;
        } else {
            const years = Math.floor(totalMonths / 12);
            const remainingMonths = totalMonths % 12;
            const yearStr = `${years} ${years === 1 ? 'Year' : 'Years'}`;
            if (remainingMonths === 0) {
                formattedExp = yearStr;
            } else {
                const monthStr = `${remainingMonths} ${remainingMonths === 1 ? 'Month' : 'Months'}`;
                formattedExp = `${yearStr} ${monthStr}`;
            }
        }

        // Update in Experience Section
        const agvExpEl = document.getElementById('agvExpDuration');
        if (agvExpEl) {
            agvExpEl.textContent = formattedExp;
        }

        // Update in Header Experience Badge
        const headerExpEl = document.getElementById('expVal');
        if (headerExpEl) {
            headerExpEl.textContent = formattedExp;
        }
    }

    updateAgvExperience();
});
