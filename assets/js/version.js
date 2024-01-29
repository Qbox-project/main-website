const latestReleaseUrl = 'https://api.github.com/repos/Qbox-project/qbx_core/releases/latest';

async function getLatestRelease() {
    try {
        const response = await axios.get(latestReleaseUrl);
        if (response.data) {
            const latestReleaseVersion = response.data.tag_name;
            document.getElementById('latestRelease').textContent = `${latestReleaseVersion}`;
        } else {
            document.getElementById('latestRelease').textContent = 'v1.0.0';
        }
    } catch (error) {
        document.getElementById('latestRelease').textContent = 'v1.0.0';
    }
}

window.onload = () => {
    getLatestRelease();
};