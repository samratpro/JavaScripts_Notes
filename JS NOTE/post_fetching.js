
    document.getElementById('startposting').addEventListener('click', async function(event) {
        event.preventDefault();
        keyword_list = document.getElementById('keyword_list').value;
        website_id = document.getElementById('website_id').value;
        img_status = document.getElementById('img_status').value;
        youtubeapi_id = document.getElementById('youtubeapi_id').value;
        category = document.getElementById('category').value;
        post_status = document.getElementById('post_status').value;
    
        console.log('keyword_list : ', keyword_list)
        console.log('website_id : ', website_id)
        console.log('img_status : ', img_status)
        console.log('youtubeapi_id : ', youtubeapi_id)
        console.log('category : ', category)
        console.log('post_status : ', post_status)
    
        if (keyword_list.length > 0 && website_id.length > 0 && post_status.length > 0) {
            fetch('/infowriter/info-bulk-posting-api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify({
                    keyword_list: keyword_list,
                    website_id: website_id,
                    youtubeapi_id: youtubeapi_id,
                    category: category,
                    post_status: post_status,
                    img_status: img_status
                })
            });
    
            // Reload the page immediately after sending the request
            location.reload();
        }
    });

    
    // Cookie parser for CSRF token
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    </script>
