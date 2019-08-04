
/**
 * モーダルウィンドウの表示・非表示を実行する。
 * モーダルの種類に
 */
import store from '@/store'
export default {
    // Modalを開く
    open (message, onOk) {
        alert(message);
        store.dispatch('openModal', {
            component: 'modal',
            params: {
                message: message,
                onOk: true
            }
        });
    },

    // Modalを閉じる
    close () {
        store.dispatch('closeModal');
    }
}