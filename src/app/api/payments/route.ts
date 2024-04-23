// untuk server
import midtransClient from 'midtrans-client';

export async function createMidtransToken(req: Request, res: Response): Promise<void> {
    try {
        const user = await User.findByPk(req.user.id);
        const data = await Order.findAll({
            where: {
                userId: req.user.id
            },
            include: Gun
        });

        let price = 0;
        if (data.length > 0) price += 5;
        data.forEach(item => {
            price += (item.Gun.price * item.qty);
        });

        const snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_SERVER_KEY || ''
        });

        const parameter = {
            "transaction_details": {
                "order_id": `TRANSACTION_${Math.floor(1000000 + Math.random() * 9000000)}`,
                "gross_amount": price
            },
            "credit_card": {
                "secure": true
            },
            "customer_details": {
                "email": user?.email,
                "phone": user?.phoneNumber
            }
        };

        const midtransToken = await snap.createTransaction(parameter);
        res.status(201).json(midtransToken);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// ini untuk di client

/* const OrdersPage = () => {

    const [data, setData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [reload, setReload] = useState(false)


useEffect(() => {
        async function fetchData(){
            try {
                const {data : order} = await axios({
                    method : "GET",
                    url : `https://www.apele.cloud/order`,
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
                    }
                })
                console.log(data, '>>> masuk order');

                let price = 0
                order.forEach(item => {
                    price += (item.Gun.price * item.qty)
                })
                setData(order)
                setTotalPrice(price)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [reload])

    async function handleCheckOut(e){
        try {
            console.log('masuk midtrans');

            const response = await axios.post('https://www.apele.cloud/midtrans', {}, {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            console.log(response, ">>>>>>>>>> ini respon");
            // window.location.href = response.data.token
            let snapToken = response.data.token
            console.log(snapToken);
            window.location.href = response.data.redirect_url


        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'eror boskuh'
                // text: error.response.data.message,
            });
        }
    }

    async function handleDelete(id){
        try {
            const response = await axios.delete(`https://www.apele.cloud/order/${id}`, {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            setReload(!reload)
        } catch (error) {
            console.log(error);
        }
    }
}
*/
